const route = require('express').Router()

const tmdbWrapper = require('../../../../tmdb')
const findController = require('../../../../db/controllers/FindController')
/**
 * @param req.query.q API search string
 */
route.get('/', async (req, res) => {
  let response = await tmdbWrapper.search.multi(req.query.q)
  if (req.user) {
    response = await Promise.all(response.map(async element => {
      if(element.media_type==='movie') {
        element.watchlist = await findController.movieInWatchlist(element.id, req.user)
        element.library = await findController.movieInLibrary(element.id, req.user)
      } else {
        element.watchlist = await findController.tvInWatchlist(element.id, req.user)
        element.library = await findController.tvInLibrary(element.id, req.user)
      }
      return element
    }))
  }
  res.send(response)
})

module.exports = route
