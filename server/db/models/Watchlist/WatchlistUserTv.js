const mongoose = require('mongoose')
const User = require('../User') // eslint-disable-line

let Schema = mongoose.Schema

/**
 * Define Shema for userMovie,
 * many to many relation for move and users
 */
let userTvSchema = new Schema({
  tv_id: { type: Schema.Types.ObjectId, ref: 'Tv', required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now }
})

let WatchlistUserTv = mongoose.model('WatchlistUserTv', userTvSchema)

module.exports = WatchlistUserTv
