const mongoose = require('mongoose')

let Schema = mongoose.Schema

/**
 * Define Shema for Movie
 */
let Tv = new Schema({
  tv_id: { type: Number, required: true, unique: true },
  title: { type: String },
  genres: { type: Array },
  overview: { type: String },
  backdrop_path: { type: String },
  poster_path: { type: String },
  release_date: { type: String },
  video: { type: Boolean },
  vote_average: { type: Number }
})

Tv = mongoose.model('Tv', Tv)

module.exports = Tv
