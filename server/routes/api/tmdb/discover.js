const route = require('express').Router()

const discover = require('../../../tmdb/discover')

route.get('/movie', async (req, res) => {
    res.send(await discover.movie())
})

route.get('/tv', async (req, res) => {
    res.send(await discover.tv())
})

module.exports = route
