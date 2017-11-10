const router = require('express').Router()
const express = require('../../../express')

router.use(express.loggedIn)

let MovieController = require('../../../db/controllers/MovieController')

/**
 * Allows the user to add a movie to watchlist,
 * the movie is then added to the UserMovie collection
 */
router.post('/', (req, res) => {
    if(MovieController.newMovie(req.body.id, req.user)) {
      res.sendStatus(200)
    }
    else {
      //if something goes wrong we send 400
      res.sendStatus(400)
  }
})

/**
 * Returnes all the movie a user have in his/heras watchlist
 */
router.get('/', async (req, res) => {
  let movies = await MovieController.findMovieForUser(req.user)
  if(movies) {
    res.send(movies)
  } else {
    //If something goes wrong we respond with a 400
    res.send(400)
  }
})

/**
 * removing movies from UserMovie for the current user, and a given movie_id
 */
router.get('/remove/:id', async (req, res) => {
  if(await MovieController.removeMovieForUser(req.params.id, req.user)) {
    //Letting the server know it went OK
    res.sendStatus(200)
  }
  else{
    //If something goes wrong we send a 400
    res.sendStatus(400)
  }
})

module.exports = router
