const route = require('express').Router()

const discover = require('../../../tmdb/discover')
const findController = require('../../../db/controllers/FindController')
route.get('/movie', async (req, res) => {
    if(req.user){
        let response = await discover.movie()
        response = await Promise.all(response.map(async movie => {
          const watchlist = await findController.movieInWatchlist(movie.id, req.user)
          const library = await findController.movieInLibrary(movie.id, req.user)
          movie.watchlist = watchlist
          movie.library = library
          return movie
      }))
      res.send(response)
    }
    else {
      res.send(await discover.movie())
    }
})

route.get('/tv', async (req, res) => {
    res.send(await discover.tv())
})

module.exports = route
