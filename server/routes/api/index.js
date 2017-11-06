const api = require('express').Router()
const express = require('../../express')

const tmdb = require('./tmdb')
const watchlist = require('./watchlist')

api.use(express.loggedIn)

api.get('/', (req, res) => {
    res.send({hello: 'world!'})
})


api.use('/tmdb', tmdb)
api.use('/watchlist', watchlist)


module.exports = api
