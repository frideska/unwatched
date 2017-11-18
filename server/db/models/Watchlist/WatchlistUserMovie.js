const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const User = require('../User') // eslint-disable-line

let Schema = mongoose.Schema

/**
 * Define Shema for userMovie,
 * many to many relation for move and users
 */
let userMovieSchema = new Schema({
  movie_id: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now }
})
userMovieSchema.plugin(mongoosePaginate)

let WatchlistUserMovie = mongoose.model('WatchlistUserMovie', userMovieSchema)

module.exports = WatchlistUserMovie
