const route = require('express').Router()

const tmdbWrapper = require('../../../tmdb/')

route.get('/movie/:id', async (req, res) => {
  res.send(await tmdbWrapper.details.movieDetails(req.params.id))
})
route.get('/tv/:id', async (req, res) => {
  res.send(await tmdbWrapper.details.tvDetails(req.params.id))
})

module.exports = route
