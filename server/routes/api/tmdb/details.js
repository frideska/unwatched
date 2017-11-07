const route = require('express').Router()

const tmdbWrapper = require('../../../tmdb/')

route.get('/:id', async (req, res) => {
  res.send(await tmdbWrapper.details(req.params.id))
})

module.exports = route
