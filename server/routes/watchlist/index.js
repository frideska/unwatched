const router = require('express').Router()
let bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function (req, res) {
  console.log(req.body.id)
})

module.exports = router
