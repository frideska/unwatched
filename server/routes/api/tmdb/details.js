const WatchlistMovieController = require('../../../pgdb/db/controllers/WatchlistMovieController')
const WatchlistSeriesController = require('../../../pgdb/db/controllers/WatchlistSeriesController')
const LibraryMovieController = require('../../../pgdb/db/controllers/LibraryMovieController')
const LibrarySeriesController = require('../../../pgdb/db/controllers/LibrarySeriesController')

const route = require('express').Router()

const tmdbWrapper = require('../../../tmdb/')

route.get('/movie/:id', async (req, res) => {
  let watchlist = false
  let library = false
  if(req.user) {
    watchlist = await WatchlistMovieController.movieInWatchlist(req.params.id, req.user.id)
    library = await LibraryMovieController.movieInLibrary(req.params.id, req.user.id)
  }
  res.send(await tmdbWrapper.details.movie(req.params.id, watchlist, library))
})
route.get('/tv/:id', async (req, res) => {
  let watchlist = false
  let library = false
  if(req.user) {
    watchlist = await WatchlistSeriesController.seriesInWatchlist(req.params.id, req.user.id)
    library = await LibrarySeriesController.seriesInLibrary(req.params.id, req.user.id)
  }
  res.send(await tmdbWrapper.details.tv(req.params.id, watchlist, library))
})

module.exports = route
