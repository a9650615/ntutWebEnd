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

  static register(classData = null, moduleName) {
    if(classData) {
      let schema = new Schema(classData)
      return mongoose.model(moduleName, schema)
    } else {
      return mongoose.model(moduleName)
    }
  }
}

module.exports = db
