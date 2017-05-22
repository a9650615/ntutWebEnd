const db = require('./db')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const jwt = require('jwt-simple')
const config = require('../config')

const FriendsDb = db.register({
  request: {type: Schema.Types.ObjectId, require: true},
  to: {type: Schema.Types.ObjectId, require: true},
  status: {type: Number, default: 0}
},
{ timestamps: {} },
'friends')

class FriendsModule {
  list(token, page = 0) {
    let user = jwt.decode(fromToken, config.secret)
    FriendsDb.find({$or: [{request: user._id}, {to: user._id}]})

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
