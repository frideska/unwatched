const router = require('express').Router()
let MovieController = require('../../../db/controllers/MovieController')

router.post('/', (req, res) => {
    MovieController.newMovie(req.body.id, req.user)
})
router.get('/', async (req, res) => {
  res.send(await MovieController.findMovieForUser(req.user))
})

module.exports = router
