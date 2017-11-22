
const GenreController = require('../pgdb/db/controllers/GenreController')

const movie = async () => {
  try {
    let { genres } = await tmdb.genres.movie()
    global.GenreMovies = {}
    await genres.forEach((genre) => {
      global.GenreMovies[genre.id] = genre.name
    })
    genres.map(async (genre) => {
      GenreController.createGenreMovie(genre)
    })
  } catch (err) {
    console.error(err)
  }
}
const tv = async () => {
  try {
    let { genres } = await tmdb.genres.tv()
    global.GenreSeries = {}
    await genres.forEach((genre) => {
      global.GenreSeries[genre.id] = genre.name
    })
    genres.map(async (genre) => {
      GenreController.createGenreTv(genre)
    })
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  getGenres: {
    tv, movie
  }
}
