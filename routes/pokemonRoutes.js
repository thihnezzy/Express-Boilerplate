const express = require('express');
const { getPokemon, getPokemonDetails } = require('../controllers/pokemon.controller');

const router = express.Router();

router.get('/', getPokemon);
router.get('/:id', getPokemonDetails);

module.exports = router;
