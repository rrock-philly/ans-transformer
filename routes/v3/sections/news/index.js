const express = require('express');
const router = express.Router();

/* GET News Article Feed */
router.get('/', function(req, res, next) {
  res.send('News Article Feed');
});

router.get('/:id', function (req, res) {
  res.send(`REQUEST params id: ${req.params.id}`);
})

module.exports = router;
