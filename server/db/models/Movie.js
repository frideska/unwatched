const mongoose = require('mongoose')

let Schema = mongoose.Schema

/**
 * Define Shema for Movie
 */
let Movie = new Schema({
  backdrop_path: { type: String },
  budget: { type: Number },
  genres: { type: Object },
  movie_id: { type: Number, required: true, unique: true },
  imdb_id: { type: String },
  original_language: { type: String },
  original_title: { type: String },
  overview: { type: String },
  popularity: { type: Number },
  poster_path: { type: String },
  production_companies: { type: Object },
  production_countries: { type: Object },
  release_date: { type: String },
  revenue: { type: Number },
  runtime: { type: Number },
  spoken_languages: { type: Object },
  status: { type: String },
  tagline: { type: String },
  title: { type: String },
  video: { type: Boolean },
  vote_average: { type: Number },
  vote_count: { type: Number }
})

Movie = mongoose.model('Movie', Movie)

module.exports = Movie
