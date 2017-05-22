const db = require('./db')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const jwt = require('jwt-simple')
const config = require('../config')

const FriendsDb = db.register({
  request: {type: Schema.Types.ObjectId, require: true, ref: 'users'},
  to: {type: Schema.Types.ObjectId, require: true, ref: 'users'},
  status: {type: Number, default: 0}
},
{ timestamps: {} },
'friends')

class FriendsModule {
  async list(token) {
    let userList = []
    let user = jwt.decode(token, config.secret)
    let data = await FriendsDb.find({
      $or: [
        {$and: [{request: user._id}, {status: 1}]},
        {$and: [{to: user._id}, {status: 1}]}
      ]}).populate('request').populate('to')

    data.forEach(val => {
      if (val.request._id !== user._id) {
        userList.push(val.request)
      } else {
        userList.push(val.to)
      }
    })

    return {status: true, userList}
  }

  async request(fromToken = '', to) {
    if (fromToken) {
      let user = jwt.decode(fromToken, config.secret)
      if(user && user._id) {
        let data = await FriendsDb.findOne({$or: [{request: user._id, to: to}, {request: to, to: user._id}]})
        if (!data) {
          new FriendsDb({request: user._id, to: to}).save()
          return {status: true}
        } else if (data.to == user._id && data.status === 0) { // 接受人是我
          // console.log('接受別人的邀請')
          data.status = 1
          await data.save()
          return {status: true, msg: ['你們以經成為朋友']}
        }
        return {status: true, warn: 1}
      } else {return {status: false, msg: ['使用者資料錯誤']}}
    } else {
      return {status: false, msg: ['使用者資料錯誤']}
    }
  }
}

module.exports = new FriendsModule()
