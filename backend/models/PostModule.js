const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId
const Schema = mongoose.Schema
const db = require('./db')
const jwt = require('jwt-simple')
const config = require('../config')
const UserModule = require('./UserModule')
const FriendsModule = require('./FriendsModule')

const Post = db.register({
  context: {type: String, required: true},
  authority : {type: Number, default: 1}, // to my friends
  user: {type: Schema.Types.ObjectId, ref: 'users'},
},
{ timestamps: {} },
'posts')

class PostModule {
  async pushPost(data) {
    var user = jwt.decode(data.token, config.secret)
    let count = await UserModule.get().count({_id: user._id})
    if (count > 0) { //has User
      const dbData = new Post({user: user._id, context: data.context})
      let ret = await (dbData.save())
      return {status: true, data: {id: ret.id}}
    } else {
      return {status: false, msg: ['認證失敗']}
    }
  }

  async listPosts(token, page = 0) {
    let userId = '591f61e3797074637f12e3ef'
    return await FriendsModule.get().aggregate([
        {$match: {$or: [
          {$and: [{request: ObjectId(userId)}, {status: 1}]},
          {$and: [{to: ObjectId(userId)}, {status: 1}]}
        ]}},
        {$lookup: {from: "posts", localField: "request", foreignField: "user", as: "posts"}},
        {$unwind: "$posts" },
        {$group: { _id: "$posts"}},
        {$project: { _id: 0, posts: "$_id"}},
        {$sort: {'posts.updatedAt': -1}}
        // {$match: {details: {$ne: []}}}
      ])
      // .find({
      //   $or: [
      //     {$and: [{request: userId}, {status: 1}]},
      //     {$and: [{to: userId}, {status: 1}]}
      //   ]})

  }
}

module.exports = new PostModule()
