const route = require('express').Router()

const tmdbWrapper = require('../../../tmdb')

route.get('/:q', async (req, res) => {
    res.send(await tmdbWrapper.search(req.params.q))
})

module.exports = route
