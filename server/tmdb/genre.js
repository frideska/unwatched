const GenreTv = require('../db/models/GenreTv')
const GenreMovie = require('../db/models/GenreMovie')

const movie = async (id, source) => {
  try {
    let genres = await tmdb.genres.movie()
    genres.genres.map(async genre => {
      let result = await GenreMovie.findOne({ id: id })
      if (!result) {
        GenreMovie.create(genre)
      }
    })
  } catch (err) {
    console.error(err)
  }
}
const tv = async (id, source) => {
  try {
    let genres = await tmdb.genres.tv()
    genres.genres.map(async genre => {
      let result = await GenreTv.findOne({ id: id })
      if (!result) {
        GenreTv.create(genre)
      }})
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  getGenres: {
    tv, movie
  }
}
