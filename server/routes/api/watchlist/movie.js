const router = require('express').Router()

let WatchlistMovieController = require('../../../pgdb/db/controllers/WatchlistMovieController')

/**
 * Allows the user to add a movie to Watchlist,
 * the movie is then added to the UserMovie collection
 * @param req.body.id
 */
router.post('/', (req, res) => {
  if (WatchlistMovieController.addMovieToUser(req.body.id, req.user.id)) {
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
})

/**
 * Returnes all the movie a user have in his/heras Watchlist
 * @param req.params.order
 * @param req.params.sortBy
 * @param req.params.search
 * @param req.params.page
 */
router.get('/', async (req, res) => {
  const options = {
    order: req.params.order || 'ASC',
    orderBy: req.params.sortBy || 'date',
    query: req.params.search || '',
    page: req.params.page || 1,
    size: 10
  }
  let movies = await WatchlistMovieController.getAllMoviesForUser(req.user.id, options)
  if (movies) {
    res.json({
      docs: movies,
      page: options.page,
      size: options.size
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
 * @param req.params.id
 */
router.delete('/', async (req, res) => {
  if (await WatchlistMovieController.removeMovieFromUser(req.params.id, req.user.id)) {
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
})

module.exports = router
