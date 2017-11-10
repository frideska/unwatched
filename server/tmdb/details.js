let watchlistController = require('../db/controllers/WatchlistController')
let libraryController = require('../db/controllers/LibraryController')


const tvDetails = async (id, user) => {
    try {
        let tv = await tmdb.tv.details({
            tv_id: id || ''
        })
      console.log("test")
      let watchlist = await watchlistController.tvInWatchlist(id, user)
      let library = await libraryController.tvInLibrary(id, user)
      return await {
        'id': tv.id,
        'title': tv.title,
        'genres': tv.genres.map((genre) => genre.name),
        'overview': tv.overview,
        'backdrop_path': tv.backdrop_path,
        'poster': tv.poster,
        'release_date': tv.release_date,
        'vote_average': tv.vote_average,
        'watchlist': watchlist,
        'library': library
      }
    } catch (err) {
        console.error(err)
        return null
    }
}
const movieDetails = async (id, user) => {
    try {
        console.log(id)
        let movie =  await tmdb.movie.details({
            movie_id: id || ''
        })
          console.log("test")
          let watchlist = await watchlistController.movieInWatchlist(id, user)
          let library = await libraryController.movieInLibrary(id, user)
          return await {
            'id': movie.id,
            'title': movie.title,
            'genres': movie.genres.map((genre) => genre.name),
            'overview': movie.overview,
            'backdrop_path': movie.backdrop_path,
            'poster': movie.poster,
            'release_date': movie.release_date,
            'vote_average': movie.vote_average,
            'watchlist': false, //watchlist,
            'library': false //library
          }
        } catch (err) {
        console.error(err)
        return null
    }
}

module.exports = {
    movieDetails,
    tvDetails
}
