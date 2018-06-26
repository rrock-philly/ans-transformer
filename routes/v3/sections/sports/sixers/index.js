const express = require('express');
const router = express.Router();

/* GET Sports Sixers Article Feed */
router.get('/', function(req, res, next) {
  res.send('Sixers Article Feed');
});

router.get('/:id', function (req, res) {
  res.send(`REQUEST params id: ${req.params.id}`);
});

module.exports = router;
