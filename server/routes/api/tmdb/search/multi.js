const route = require('express').Router()

const tmdbWrapper = require('../../../../tmdb')
const findController = require('../../../../db/controllers/FindController')

const Movie = require('../../../../pgdb/db/models').Movie
const Series = require('../../../../pgdb/db/models').Series

const MovieController = require('../../../../pgdb/db/controllers/MovieController')
const SeriesController = require('../../../../pgdb/db/controllers/SeriesController')

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
          element.watchlist = await findController.movieInWatchlist(element.id, req.user)
          element.library = await findController.movieInLibrary(element.id, req.user)
        } else {
          element.watchlist = await findController.tvInWatchlist(element.id, req.user)
          element.library = await findController.tvInLibrary(element.id, req.user)
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
