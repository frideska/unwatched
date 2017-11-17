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
    res.sendStatus(200)
  } else {
    // if something goes wrong we send 400
    res.sendStatus(400)
  }
})

/**
 * Returnes all the movie a user have in his/heras watchlist
 */
router.get('/movie', async (req, res) => {
  let movies = await controller.findMovieForUser(req.user)
  if (movies) {
    res.send(movies)
  } else {
    // If something goes wrong the server respond with a 400
    res.sendStatus(400)
  }
})

/**
 * removing movies from UserMovie for the current user, and a given movie_id
 */
router.get('/movie/remove/:id', async (req, res) => {
  if (await controller.removeMovieForUser(req.params.id, req.user)) {
    // Letting the server know it went OK
    res.sendStatus(200)
  } else {
    // If something goes wrong the server respond with a 400
    res.sendStatus(400)
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
    // if something goes wrong we send 400
    res.sendStatus(400)
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
    // If something goes wrong the server respond with a 400
    res.send(400)
  }
})

/**
 * removing movies from UserTv for the current user, and a given movie_id
 */
router.get('/tv/remove/:id', async (req, res) => {
  if (await controller.removeTvForUser(req.params.id, req.user)) {
    // Letting the server know it went OK
    res.sendStatus(200)
  } else {
    // If something goes wrong the server respond with a 400
    res.sendStatus(400)
  }
})

module.exports = router
