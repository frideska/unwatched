const router = require('express').Router()
const express = require('../../../express')

router.use(express.loggedIn)

let LibraryController = require('../../../pgdb/db/controllers/LibraryController')

/**
 * Allows the user to add a movie to library,
 * the movie is then added to the UserMovie collection
 */
router.post('/movie', (req, res) => {
  if (LibraryController.addMovieToUser(req.body.id, req.user)) {
    res.sendStatus(200)
  } else {
    const response = {
      errors: [{
        userMessage: 'Sorry, the movie could not be added',
        code: 400
      }]
    }
<<<<<<< HEAD
    // if something goes wrong we send the response
=======
>>>>>>> Making progress
    res.status = 400
    res.send(response)
  }
})

/**
 * Returnes all the movie a user have in his/heras library
 */
router.get('/movie', async (req, res) => {
  let sortBy = 'standard'
  let search = ''
  if (req.query.sort_by) {
    sortBy = req.query.sort_by
  }
  if (req.query.search) {
    search = req.query.search
  }
  let movies = await controller.findMovieForUser(req.user, sortBy, search)
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
    res.status = 400
    res.send(response)
  }
})

/**
 * removing movies from UserMovie for the current user, and a given movie_id
 */
router.delete('/movie/remove/:id', async (req, res) => {
  if (await controller.removeMovieForUser(req.params.id, req.user)) {
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
    res.status = 400
    res.send(response)
  }
})

/**
 * Allows the user to add a tv-show to library,
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
    res.status = 400
    res.send(response)
  }
})

/**
 * Returnes all the tv-shows a user have in his/heras library
 */
router.get('/tv', async (req, res) => {
  let sortBy = 'standard'
  let search = ''
  if (req.query.sort_by) {
    sortBy = req.query.sort_by
  }
  if (req.query.search) {
    search = req.query.search
  }
  let tv = await controller.findTvForUser(req.user, sortBy, search)
  if (tv) {
    res.send(tv)
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
    res.status = 400
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
    res.status = 400
    res.send(response)
  }
})

module.exports = router
