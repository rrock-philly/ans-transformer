const express = require('express');
const router = express.Router();

/* GET Articles Feed */
router.get('/', function(req, res, next) {
  res.send('Article Middleware');
});

router.get('/:id', function (req, res) {
  res.send(`REQUEST params id: ${req.params.id}`);
});

module.exports = router;
