let mongoose = require('mongoose')
let User = require('./models/User')

const DB_HOST = process.env.P4_DB_HOST || '127.0.0.1'
const DB_PORT = process.env.P4_DB_PORT || '27017'
const DB_NAME = process.env.P4_DB_NAME || 'it2810-g22-p4'
const DB_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

mongoose.Promise = global.Promise

mongoose.connect(DB_URL, {useMongoClient: true})
    .then(() => {
        console.log(`Succesfully Connected to the Mongodb Database  at URL : ${DB_URL}`)
    }).catch(() => {
        console.error(`Error Connecting to the Mongodb Database at URL : ${DB_URL}`)
    })

//mongoose.model('User', User)


module.exports = mongoose
