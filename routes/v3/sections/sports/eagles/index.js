const express = require('express');
const router = express.Router();

/* GET Sports Eagles Article Feed */
router.get('/', function(req, res, next) {
  res.send('Eagles Article Feed');
});

router.get('/:id', function (req, res) {
  console.log(`\n REQUEST params id:  ${req.params.id}`);
  res.send(`REQUEST params id: ${req.params.id}`);
});

module.exports = router;
