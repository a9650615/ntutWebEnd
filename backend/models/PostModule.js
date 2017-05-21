const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('./db')
const jwt = require('jwt-simple')
const config = require('../config')
const UserModule = require('./UserModule')

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

  async readPosts(page = 0) {

  }
}

module.exports = new PostModule()
