const db = require('./db')
const config = require('../config')
const jwt = require('jwt-simple');

let User = db.register({
  name: {type: String, default: '', required: true},
  account: {type: String, minlength: [5, '帳號至少要五個字'], required: true},
  password: {type: String, minlength: [6, '密碼至少要六個字'], required: true},
}, 'users')

User.schema.path('account').validate(async (value) => {
  let data = await User.find({account: value})
  return data.length === 0
}, '{VALUE} 已經註冊過！')

User.schema.path('account').validate((value) => {
  var re = /\S+@\S+\.\S+/
  return re.test(value)
}, '帳號必須是 Email！')

class UserModule {
  async add(data) {
    let msg = []
    try{
      await User(data).save()
      return {status: true, token: jwt.encode({account: data.account, password: data.password}, config.secret)}
    } catch(e) {
      for(let i in e.errors) {
        msg.push(e.errors[i].message)
      }
      return {status: false, msg: msg}
    }
  }

  list() {
    return User.find()
  }

  async auth(data) {
    let user = await User.findOne(data)
    if (user) {
      return {status: true, token: jwt.encode({account: user.account, password: user.password}, config.secret)}
    } else {
      return {status: false, msg: ['登入失敗']}
    }
  }

  update() {

  }

  delete() {

  }
}

module.exports = new UserModule()
