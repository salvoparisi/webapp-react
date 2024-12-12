const express = require('express')
const router = express.Router()
const controllers = require('../controllers/movies.js')

router.get('/', controllers.index)
router.get('/:id', controllers.show)

module.exports = router