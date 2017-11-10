const mongoose = require('mongoose')
const User = require('../User')

let Schema = mongoose.Schema

/**
 * Define Shema for userMovie,
 * many to many relation for move and users
 */
let userMovieSchema = new Schema({
  movie_id: { type: String, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true},
  date: { type: Date, default: Date.now }
})

let WatchlistUserMovie = mongoose.model('LibraryUserMovie', userMovieSchema)

module.exports = WatchlistUserMovie
