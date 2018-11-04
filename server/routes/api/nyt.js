const router = require('express').Router()
const nytController = require('../../controllers/nytController')

router.route('/').get(nytController.findAll)

module.exports = router
