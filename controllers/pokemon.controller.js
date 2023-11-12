// point to the home/index.js view
const getPokemon = async (req, res) => {
  const searchQuery = req?.query?.query || '';
  const selectedType = req?.query?.type || '';
  try {
    const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/100');
    const data = await response.json();
    let filteredPokemon = data;
    if (searchQuery) {
      filteredPokemon = filteredPokemon.filter(pokemon => (
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      ));
    }

    if (selectedType) {
      filteredPokemon = filteredPokemon.filter(pokemon =>
        pokemon.apiTypes.some(type => type.name === selectedType)
      );
    }
    res.render('pages/pokemon', {
      title: 'Pokemon',
      pokes : filteredPokemon,
      searchQuery,
      selectedType,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong');
  }

};


const getPokemonDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`);
    const data = await response.json();
    res.render('pages/pokemon/pokemonDetails', {
      title: 'Pokemon Details',
      poke: data,
    });
  } catch (error) {
    console.log(error);
  }
}

const getPokemonDataDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getPokemon,
  getPokemonDetails,
  getPokemonDataDetails
};
