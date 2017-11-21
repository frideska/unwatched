const route = require('express').Router()

const tmdbWrapper = require('../../../../tmdb')

const WatchlistMovieController = require('../../../../pgdb/db/controllers/WatchlistMovieController')
const WatchlistSeriesController = require('../../../../pgdb/db/controllers/WatchlistSeriesController')
const LibraryMovieController = require('../../../../pgdb/db/controllers/LibraryMovieController')
const LibrarySeriesController = require('../../../../pgdb/db/controllers/LibrarySeriesController')

/**
 * @param req.query.q API search string
 * @param req.query.counter Counter to make sure async search results are showed correctly
 */
route.get('/', async (req, res) => {
  try {
    let response = await tmdbWrapper.search.multi(req.query.q)
    if (req.user) {
      response = await Promise.all(response.map(async element => {
        if (element.media_type === 'movie') {
          element.watchlist = await WatchlistMovieController.movieInWatchlist(element.id, req.user.id)
          element.library = await LibraryMovieController.movieInLibrary(element.id, req.user.id)
        } else {
          element.watchlist = await WatchlistSeriesController.seriesInWatchlist(element.id, req.user.id)
          element.library = await LibrarySeriesController.seriesInLibrary(element.id, req.user.id)
        }
        return element
      }))
    }
    res.json({results: response, counter: req.query.counter || 0})
  } catch (err) {
    console.error(err)
  }
})

module.exports = route
