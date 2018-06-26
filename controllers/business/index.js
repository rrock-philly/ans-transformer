const express = require('express')
const router = express.Router()

router.get('/business', function (req, res, next) {
  console.log('Base Business Router')
  res.send('Business Router')
})

router.get('/:id', function (req, res) {
  console.log(`Business Article Id: ${req.params.id}`)
})

module.exports = router
