const router = require('express').Router()
const express = require('../../../express')

router.use(express.loggedIn)

let controller = require('../../../db/controllers/WatchlistController')

/**
 * Allows the user to add a movie to watchlist,
 * the movie is then added to the UserMovie collection
 */
router.post('/movie', (req, res) => {
  if (controller.newMovie(req.body.id, req.user)) {
    //send status code 201 a new enry have been created
    res.sendStatus(201)
  } else {
    const response = {
      errors: [
        {
          userMessage: 'Sorry, the movie could not be added',
          code: 400
        }
      ]
    }
    // if something goes wrong we send the response
    res.status = 400;
    res.send(response)
  }
})

/**
 * Returnes all the movie a user have in his/heras watchlist
 */
router.get('/movie', async (req, res) => {
  let movies = await controller.findMovieForUser(req.user, req.query.sort_by)
  if (movies) {
    res.send(movies)
  } else {
    const response = {
      errors: [
        {
          userMessage: 'Sorry, something went wrong',
          code: 400
        }
      ]
    }
    // if something goes wrong we send the response
    res.status = 400;
    res.send(response)
  }
})

/**
 * removing movies from UserMovie for the current user, and a given movie_id
 */
router.delete('/movie/remove/:id', async (req, res) => {
  if (await controller.removeMovieForUser(req.params.id, req.user)) {
    // Letting the client know the delete was sucsessfull
    res.sendStatus(204)
  } else {
    const response = {
      errors: [
        {
          userMessage: 'Sorry, we were unable to delete that elemeent',
          code: 400
        }
      ]
    }
    // if something goes wrong we send the response
    res.status = 400;
    res.send(response)
  }
})

/**
 * Allows the user to add a tv-show to watchlist,
 * the movie is then added to the UserMovie collection
 */
router.post('/tv', (req, res) => {
  if (controller.newTv(req.body.id, req.user)) {
    res.sendStatus(200)
  } else {
    const response = {
      errors: [
        {
          userMessage: 'Sorry, the tv-show could not be added',
          code: 400
        }
      ]
    }
    // if something goes wrong we send the response
    res.status = 400;
    res.send(response)
  }
})

/**
 * Returnes all the tv-shows a user have in his/heras watchlist
 */
router.get('/tv', async (req, res) => {
  let movies = await controller.findTvForUser(req.user)
  if (movies) {
    res.send(movies)
  } else {
    const response = {
      errors: [
        {
          userMessage: 'Sorry, something went wrong',
          code: 400
        }
      ]
    }
    // if something goes wrong we send the response
    res.status = 400;
    res.send(response)
  }
})

/**
 * removing movies from UserTv for the current user, and a given movie_id
 */
router.delete('/tv/remove/:id', async (req, res) => {
  if (await controller.removeTvForUser(req.params.id, req.user)) {
    // Letting the server know it went OK
    res.sendStatus(204)
  } else {
    const response = {
      errors: [
        {
          userMessage: 'Sorry, we were unable to delete that elemeent',
          code: 400
        }
      ]
    }
    // if something goes wrong we send the response
    res.status = 400;
    res.send(response)
  }
})

module.exports = router
