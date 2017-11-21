const route = require('express').Router()

const discover = require('../../../tmdb/discover')
const findController = require('../../../db/controllers/FindController')


route.get('/movie', async (req, res) => {
  let response = await discover.movie()
  if (req.user) {
    response = await Promise.all(response.map(async movie => {
      const watchlist = await findController.movieInWatchlist(movie.id, req.user)
      const library = await findController.movieInLibrary(movie.id, req.user)
      movie.watchlist = watchlist
      movie.library = library
      return movie
    }))
  }
  res.send(response)
})

route.get('/tv', async (req, res) => {
  let response = await discover.tv()
  if (req.user) {
    response = await Promise.all(response.map(async tv => {
      const watchlist = await findController.tvInWatchlist(tv.id, req.user)
      const library = await findController.tvInLibrary(tv.id, req.user)
      tv.watchlist = watchlist
      tv.library = library
      return tv
    }))
  }
  res.send(response)
})

module.exports = route
