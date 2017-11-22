const WatchlistMovieController = require('../../../pgdb/db/controllers/WatchlistMovieController')
const WatchlistSeriesController = require('../../../pgdb/db/controllers/WatchlistSeriesController')
const LibraryMovieController = require('../../../pgdb/db/controllers/LibraryMovieController')
const LibrarySeriesController = require('../../../pgdb/db/controllers/LibrarySeriesController')
const MovieController = require('../../../pgdb/db/controllers/MovieController')
const SeriesController = require('../../../pgdb/db/controllers/SeriesController')

const route = require('express').Router()

const tmdbWrapper = require('../../../tmdb/')

route.get('/movie/:id', async (req, res) => {
  let watchlist = false
  let library = false
  if (req.user) {
    watchlist = await WatchlistMovieController.movieInWatchlist(req.params.id, req.user.id)
    library = await LibraryMovieController.movieInLibrary(req.params.id, req.user.id)
  }
  let movie = await MovieController.findOneRaw(req.params.id)
  if (movie) {
    movie.watchlist = watchlist
    movie.library = library
  } else {
    movie = await tmdbWrapper.details.movie(req.params.id, watchlist, library)
  }
  res.send(movie)
})

route.get('/tv/:id', async (req, res) => {
  let watchlist = false
  let library = false
  if (req.user) {
    watchlist = await WatchlistSeriesController.seriesInWatchlist(req.params.id, req.user.id)
    library = await LibrarySeriesController.seriesInLibrary(req.params.id, req.user.id)
  }
  let series = await SeriesController.findOneRaw(req.params.id)
  if (series) {
    series.watchlist = watchlist
    series.library = library
  } else {
    series = await tmdbWrapper.details.tv(req.params.id, watchlist, library)
  }
  res.send(series)
})

module.exports = route
