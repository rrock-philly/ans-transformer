const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  console.log('Base Sections Router');
  res.send('Base Sections Router');
});

// ======================
//   Router Middlewares
// ======================
router.use('/business', require('./business'));
router.use('/news', require('./news'));
router.use('/sports', require('./sports'));

module.exports = router;
