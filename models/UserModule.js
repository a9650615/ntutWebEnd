const db = require('./db')

let User = db.register({
  name: {type: String, default: ''},
  account: {type: String, min: 5, isAsync: true},
  password: {type: String},
}, 'users')

User.schema.path('account').validate(async (value) => {
  let data = await User.find({account: value})
  return data.length === 0
}, '{VALUE} 已經註冊過！')


class UserModule {
  async add(data) {
    try{
      await User(data).save()
      return {status: true}
    } catch(e) {
      return {status: false, msg: e.errors.account.message}
    }
  }

  list() {
    return User.find()
  }

  update() {

  }

  delete() {

  }
}

module.exports = new UserModule()
