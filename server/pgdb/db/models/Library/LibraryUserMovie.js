const mongoose = require('mongoose')
const User = require('../User') // eslint-disable-line

const mongoosePaginate = require('mongoose-paginate')

let Schema = mongoose.Schema

/**
 * Define Shema for userMovie,
 * many to many relation for move and users
 */
let userMovieSchema = new Schema({
  movie_id: { type: Number, required: true, unique: true },
  title: { type: String },
  genres: { type: Array },
  overview: { type: String },
  backdrop_path: { type: String },
  poster_path: { type: String },
  release_date: { type: String },
  video: { type: Boolean },
  vote_average: { type: Number },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now }
})
userMovieSchema.plugin(mongoosePaginate)

let WatchlistUserMovie = mongoose.model('LibraryUserMovie', userMovieSchema)

module.exports = WatchlistUserMovie
