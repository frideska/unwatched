const router = require('express').Router()

const WatchlistMovieController = require('../../../pgdb/db/controllers/WatchlistMovieController')
const MovieController = require('../../../pgdb/db/controllers/MovieController')
const tmdbWrapper = require('../../../tmdb/')
const queryTools = require('../../../pgdb/db/queryTools')

/**
 * Allows the user to add a movie to Watchlist,
 * the movie is then added to the UserMovie collection
 * @param req.body.id
 */
router.post('/', async (req, res) => {
  try {
    const movie = await tmdbWrapper.details.movie(req.body.id)
    const dbMovie = await MovieController.create(movie)
    if (await WatchlistMovieController.addMovieToUser(dbMovie.id, req.user.id)) {
      res.sendStatus(200)
    } else {
      const response = {
        errors: [{
          userMessage: 'Sorry, the movie could not be added',
          code: 400
        }]
      }
      res.status = 400
      res.send(response)
    }
  } catch (err) {
    console.error(err)
  }
})

/**
 * Returnes all the movie a user have in his/heras Watchlist
 * @param req.query.order
 * @param req.query.orderBy
 * @param req.query.search
 * @param req.query.page
 */
router.get('/', async (req, res) => {
  const options = queryTools.parse(req.query)
  let movies = await WatchlistMovieController.getAllMoviesForUser(req.user.id, options)
  if (movies) {
    res.json({
      docs: movies,
      page: options.page,
      size: options.size,
      pageCount: Math.ceil((await WatchlistMovieController.getPageCount(req.user.id, options)) / options.size)
    })
  } else {
    const response = {
      errors: [{
        userMessage: 'Sorry, something went wrong',
        code: 400
      }]
    }
    // if something goes wrong we send the response
    res.status = 400
    res.send(response)
  }
})

/**
 * removing movies from UserMovie for the current user, and a given movie_id
 * @param req.body.id
 */
router.delete('/', async (req, res) => {
  try {
    if (await WatchlistMovieController.removeMovieFromUser(req.body.id, req.user.id)) {
      res.sendStatus(204)
    } else {
      const response = {
        errors: [{
          userMessage: 'Sorry, we were unable to delete that elemeent',
          code: 400
        }]
      }
      res.status = 400
      res.send(response)
    }
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
