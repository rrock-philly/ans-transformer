const express = require('express');
const router = express.Router();

/* GET Sports Section Front Articles Feed */
router.get('/', function(req, res, next) {
  res.send('Sports Section Front Feed');
});

// ======================
//   Sport Team Routers
// ======================
router.use('/eagles', require('./eagles'));
router.use('/flyers', require('./flyers'));
router.use('/sixers', require('./sixers'));
router.use('/phillies', require('./phillies'));

module.exports = router;
