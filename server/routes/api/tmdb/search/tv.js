const route = require('express').Router()

const tmdbWrapper = require('../../../../tmdb')

/**
 * @param req.query.q API search string
 */
route.get('/', async (req, res) => {
    res.send(await tmdbWrapper.search.tv(req.query.q))
})

module.exports = route
