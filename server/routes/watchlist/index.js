const router = require('express').Router()

router.post('/', (req, res) => {
    console.log(req.body.id)
})

module.exports = router
