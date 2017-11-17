const Movie = require('../db/models/Movie')
const Tv = require('../db/models/Tv')

const tv = async (id, watchlist, library) => {
  try {
    let tv = await Tv.findOne({ tv_id: id })
    if (!tv) {
      tv = await tmdb.tv.details({
        tv_id: id || ''
      })
      tv.genres = tv.genres.map((genre) => genre.name)
      tv.tv_id = tv.id
      tv.title = tv.name
      tv.release_date = tv.first_air_date
      await Tv.create(tv)
    }

    return {
      id: tv.tv_id,
      title: tv.title,
      genres: tv.genres,
      overview: tv.overview,
      backdrop_path: tv.backdrop_path,
      poster_path: tv.poster_path,
      release_date: tv.release_date,
      vote_average: tv.vote_average,
      watchlist: watchlist,
      library: library,
      media_type: 'tv'
    }
  } catch (err) {
    console.error(err)
    return null
  }
}
const movie = async (id, watchlist, library) => {
  try {
    let movie = await Movie.findOne({ movie_id: id })
    if (!movie){
      movie = await tmdb.movie.details({ movie_id: id || '' })
      movie.genres = movie.genres.map((genre) => genre.name)
      movie.movie_id = movie.id
      await Movie.create(movie)
    }
    return {
      id: movie.movie_id,
      title: movie.title,
      genres: movie.genres ,
      overview: movie.overview,
      backdrop_path: movie.backdrop_path,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      watchlist: watchlist,
      library: library,
      media_type: 'movie'
    }
  } catch (err) {
    console.error(err)
    return null
  }
}

module.exports = {
  details: {
    movie,
    tv
  }
}
