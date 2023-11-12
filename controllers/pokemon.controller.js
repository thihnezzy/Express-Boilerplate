// point to the home/index.js view
const getPokemon = async (req, res) => {
  const searchQuery = req?.query?.query || '';
  const selectedType = req?.query?.type || '';

  const offset = parseInt(req.query.offset, 10) || 0;
  const limit = 10;
  try {
    const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/100');
    const data = await response.json();
    let filteredPokemon = data;
    if (!searchQuery && !selectedType) {
      const pokes = data.slice(offset, offset + limit);
      if (req.xhr || req.headers.accept.includes('json')) {
        res.json(pokes);
      }else {
        res.render('pages/pokemon', {
          title: 'Pokemon',
          pokes,
          offset: offset + limit,
          searchQuery,
          selectedType
        });
      }
    }
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
      offset: offset + limit
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('Something went wrong');
  }

};

// const getPokemon = async (req, res) => {
//   const offset = parseInt(req.query.offset, 10) || 0;
//   const limit = 10;
//   const searchQuery = req?.query?.query || '';
//   const selectedType = req?.query?.type || '';
//   try {
//     const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/limit/100`);
//     const allPokemon = await response.json();
//     const pokes = allPokemon.slice(offset, offset + limit);
//     if (req.xhr || req.headers.accept.includes('json')) {
//       res.json(pokes);
//     } else {
//       res.render('pages/pokemon', { title: 'Pokemon', pokes, offset: offset + limit ,searchQuery,selectedType,});
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Something went wrong');
//   }
// };


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
