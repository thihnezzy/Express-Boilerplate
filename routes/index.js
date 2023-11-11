const express = require('express');

const router = express.Router();

router.use('/home', require('./homeRoutes'));
router.use('/pokemon', require('./pokemonRoutes'));
router.use('/todos', require('./todoRoutes'));
// router.use('/users', require('./userRoutes'));


module.exports = router;