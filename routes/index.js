const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./eventRoutes.js'))

module.exports = router
