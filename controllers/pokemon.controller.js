// point to the home/index.js view
//SOLID principles
const getPokemon = async (req, res) => {
  const searchQuery = req.query.query;
  try {
    const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/100');
    const data = await response.json();
    if (!searchQuery) 
      return res.render('pages/pokemon', {
        title: 'Pokemon',
        pokes: data,
      });

      
    const filteredPokemon = data.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    res.render('pages/pokemon', {
      title: 'Pokemon',
      pokes: data,
      pokes : filteredPokemon,
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

module.exports = {
  getPokemon,
  getPokemonDetails,
};
