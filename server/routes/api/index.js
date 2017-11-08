const api = require('express').Router()


const tmdb = require('./tmdb')
const watchlist = require('./watchlist')




api.get('/', (req, res) => {
    res.send({hello: 'world!'})
})

api.use('/tmdb', tmdb)
api.use('/watchlist', watchlist)


module.exports = api
