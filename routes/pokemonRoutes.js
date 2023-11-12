const express = require('express');
const { getPokemon, getPokemonDetails,getPokemonDataDetails } = require('../controllers/pokemon.controller');

const router = express.Router();

router.get('/', getPokemon);
router.get('/:id', getPokemonDetails);
router.get('/data/:id', getPokemonDataDetails);
module.exports = router;
