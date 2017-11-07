
const router = require('express').Router()
let MovieController = require('../../../db/controllers/MovieController')

router.post('/', (req, res) => {
    console.log(req.body.id)
    MovieController.newMovie(req.body.id, req.user)
    console.log("added")
})
router.get('/', async (req, res) => {
    console.log("User is logged in")
    res.send(await MovieController.findMovieForUser(req.user))
})

module.exports = router
