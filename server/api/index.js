const router = require('express').Router()
module.exports = router

router.use('/products', require('./products'))
router.use('/cart', require('./cart'))
router.use('/admin', require('./admin'))
router.use('/profile', require('./profile'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
