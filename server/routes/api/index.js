const api = require('express').Router()

const tmdb = require('./tmdb')

api.get('/', (req, res) => {
    res.send({hello: 'world!'})
})

api.use('/tmdb', tmdb)

module.exports = api
