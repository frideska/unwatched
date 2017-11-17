const route = require('express').Router()

const tmdbWrapper = require('../../../tmdb/')

route.get('/:id', async (req, res) => {
  res.send(await tmdbWrapper.find(req.params.id, 'imdb_id'))
})

module.exports = route
