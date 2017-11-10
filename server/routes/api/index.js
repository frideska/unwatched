const api = require('express').Router()


const tmdb = require('./tmdb')
const watchlist = require('./watchlist')
const library = require('./library')


api.get('/', (req, res) => {
    res.send('Welcome to our API!')
})

api.use('/tmdb', tmdb)
api.use('/watchlist', watchlist)
api.use('/library', library)

module.exports = api
