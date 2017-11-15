const tv = async (id, watchlist, library) => {
    try {
        let tv = await tmdb.tv.details({
            tv_id: id || ''
        })

      return await {
        'id': tv.id,
        'name': tv.title,
        'genres': tv.genres.map((genre) => genre.name),
        'overview': tv.overview,
        'backdrop_path': tv.backdrop_path,
        'poster_path': tv.poster_path,
        'release_date': tv.release_date,
        'vote_average': tv.vote_average,
        'watchlist': watchlist,
        'library': library,
        'media_type': 'tv'
      }
    } catch (err) {
        console.error(err)
        return null
    }
}
const movie = async (id, watchlist, library) => {
    try {
        let movie =  await tmdb.movie.details({
            movie_id: id || ''
        })
          return await {
            'id': movie.id,
            'title': movie.title,
            'genres': movie.genres.map((genre) => genre.name),
            'overview': movie.overview,
            'backdrop_path': movie.backdrop_path,
            'poster_path': movie.poster_path,
            'release_date': movie.release_date,
            'vote_average': movie.vote_average,
            'watchlist': watchlist,
            'library': library,
            'media_type': 'movie'
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
