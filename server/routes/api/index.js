const api = require('express').Router()

const tmdb = require('./tmdb')
const watchlist = require('./watchlist')
const library = require('./library')
const history = require('./history')

api.get('/', (req, res) => {
  res.send('Welcome to our API!')
})

api.use('/tmdb', tmdb)
api.use('/watchlist', watchlist)
api.use('/library', library)
api.use('/history', history)

module.exports = api
