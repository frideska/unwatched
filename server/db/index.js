let mongoose = require('mongoose')

const DB_HOST = process.env.P4_DB_HOST || '127.0.0.1'
const DB_PORT = process.env.P4_DB_PORT || '27017'
const DB_NAME = process.env.P4_DB_NAME || 'it2810-g22-p4'
const DB_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

mongoose.Promise = global.Promise

const success = `Mongodb connected at: ${DB_URL}`
const failure = `
        Could not connect to Mongodb server at: ${DB_URL}.
        Make sure your database is running before you start the server!
`

const init = async () => {
  try {
    const connection = await mongoose.connect(DB_URL, {useMongoClient: true})
    console.log(success)
    return connection
  } catch (err) {
    console.error(failure)
    process.exit(1)
  }
}

module.exports = { init }
