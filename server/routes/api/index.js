const api = require('express').Router()

api.get('/', (req, res) => {
    res.send({hello: 'world!'})
})

module.exports = api
