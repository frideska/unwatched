const mongoose = require('mongoose')

let Schema = mongoose.Schema

/**
 * Define Shema for Movie
 */
let Movie = new Schema({
  movie_id: { type: Number, required: true, unique: true },
  title: { type: String },
  genres: { type: Array },
  overview: { type: String },
  backdrop_path: { type: String },
  poster_path: { type: String },
  release_date: { type: String },
  video: { type: Boolean },
  vote_average: { type: Number }
})

Movie = mongoose.model('Movie', Movie)

module.exports = Movie
