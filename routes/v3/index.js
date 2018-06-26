const express = require('express');
const router = express.Router();

// Wire up Version 3 of API
router.use('/sections', require('./sections'));
router.use('/articles', require('./articles'));

module.exports = router;