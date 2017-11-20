const route = require('express').Router()

const tmdbWrapper = require('../../../../tmdb')

const MovieController = require('../../../../pgdb/db/controllers/MovieController')
const SeriesController = require('../../../../pgdb/db/controllers/SeriesController')

const WatchlistMovieController = require('../../../../pgdb/db/controllers/WatchlistMovieController')
const WatchlistSeriesController = require('../../../../pgdb/db/controllers/WatchlistSeriesController')
const LibraryMovieController = require('../../../../pgdb/db/controllers/LibraryMovieController')
const LibrarySeriesController = require('../../../../pgdb/db/controllers/LibrarySeriesController')

/**
 * @param req.query.q API search string
 */
route.get('/', async (req, res) => {
  try {
    let response = await tmdbWrapper.search.multi(req.query.q)
    response.forEach((result) => {
      if (result.media_type === 'movie') {
        MovieController.create(result)
      } else if (result.media_type === 'tv') {
        console.log(result.title)
        SeriesController.create(result)
      } else {
        throw new Error('TMDB API media_type is not defined')
      }
    })
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
    res.send(response)
  } catch (err) {
    console.error(err)
  }
})

module.exports = route
