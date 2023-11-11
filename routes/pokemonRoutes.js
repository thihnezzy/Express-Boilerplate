const express = require('express');
const { getPokemon } = require('../controllers/pokemon.controller');

const router = express.Router();

router.get('/', getPokemon);


module.exports = router;
