const mongoose = require('mongoose')
const Schema = mongoose.Schema
let StaticDb = null

class db {
  static async connect() {
    console.log('connect to DB')
    await mongoose.connect('mongodb://birdyo:5487@fakebook-shard-00-00-br0xo.mongodb.net:27017,fakebook-shard-00-01-br0xo.mongodb.net:27017,fakebook-shard-00-02-br0xo.mongodb.net:27017/test?ssl=true&replicaSet=fakebook-shard-0&authSource=admin')
    console.log('Finished!!')
  }

  static db() {
    return StaticDb
  }

  static register(classData, option = null, moduleName = null) {
    if (option && typeof(option) === 'object') {
      let schema = new Schema(classData, option)
      return mongoose.model(moduleName, schema)
    }
    else
      if(classData) {
        let schema = new Schema(classData)
        return mongoose.model(option, schema)
      } else {
        return mongoose.model(option)
      }
  }
}

module.exports = db
