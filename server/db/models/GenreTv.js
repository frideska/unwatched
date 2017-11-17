const mongoose = require('mongoose')

let Schema = mongoose.Schema

/**
 * Define Shema for Movie
 */
let GenreSchema = new Schema({
  tv_id: { type: Number, required: true },
  name: { type: String }
})

const GenreTv = mongoose.model('GenreTv', GenreSchema)

module.exports = GenreTv
