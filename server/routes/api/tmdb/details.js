const FindController = require('../../../db/controllers/FindController')

const route = require('express').Router()

const tmdbWrapper = require('../../../tmdb/')

route.get('/movie/:id', async (req, res) => {
  const watchlist = await FindController.movieInWatchlist(req.params.id, req.user)
  const library = await FindController.movieInLibrary(req.params.id, req.user)
  res.send(await tmdbWrapper.details.movie(req.params.id, watchlist, library))
})
route.get('/tv/:id', async (req, res) => {
  const watchlist = await FindController.tvInWatchlist(req.params.id, req.user)
  const library = await FindController.tvInLibrary(req.params.id, req.user)
  res.send(await tmdbWrapper.details.tv(req.params.id, watchlist, library))
})

module.exports = route
