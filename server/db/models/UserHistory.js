const mongoose = require('mongoose')
const User = require('./User') // eslint-disable-line

let Schema = mongoose.Schema

/**
 * Define Schema contianing user history.
 */
let UserHistory = new Schema({
  content: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now }
})

const UH = mongoose.model('UserHistory', UserHistory)

module.exports = UH
