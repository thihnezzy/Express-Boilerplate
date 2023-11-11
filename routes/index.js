const express = require('express');

const router = express.Router();

router.use('/', require('./homeRoutes'));

module.exports = router;