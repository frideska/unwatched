const route = require('express').Router()

const discover = require('../../../tmdb/discover')

const MovieController = require('../../../pgdb/db/controllers/MovieController')
const SeriesController = require('../../../pgdb/db/controllers/SeriesController')

const WatchlistMovieController = require('../../../pgdb/db/controllers/WatchlistMovieController')
const WatchlistSeriesController = require('../../../pgdb/db/controllers/WatchlistSeriesController')
const LibraryMovieController = require('../../../pgdb/db/controllers/LibraryMovieController')
const LibrarySeriesController = require('../../../pgdb/db/controllers/LibrarySeriesController')

route.get('/movie', async (req, res) => {
  let response = await discover.movie()
  if (req.user) {
    response = await Promise.all(response.map(async (movie) => {
      MovieController.create(movie)
      const watchlist = await WatchlistMovieController.movieInWatchlist(movie.id, req.user.id)
      const library = await LibraryMovieController.movieInLibrary(movie.id, req.user.id)
      movie.watchlist = watchlist
      movie.library = library
      return movie
    }))
  }
  res.send(response)
})

route.get('/tv', async (req, res) => {
  let response = await discover.tv()
  if (req.user) {
    response = await Promise.all(response.map(async (series) => {
      SeriesController.create(series)
      const watchlist = await WatchlistSeriesController.seriesInWatchlist(series.id, req.user.id)
      const library = await LibrarySeriesController.seriesInLibrary(series.id, req.user.id)
      series.watchlist = watchlist
      series.library = library
      return series
    }))
  }
  res.send(response)
})

module.exports = route
