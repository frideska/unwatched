const route = require('express').Router()

const tmdbWrapper = require('../../../../tmdb')
const findController = require('../../../../db/controllers/FindController')
/**
 * @param req.query.q API search string
 */
route.get('/', async (req, res) => {
  let response = await tmdbWrapper.search.multi(req.query.q)
  if(req.user){
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

module.exports = route
