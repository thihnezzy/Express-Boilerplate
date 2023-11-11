// point to the home/index.js view
//SOLID principles
const getPokemon = async (req, res) => {
  const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/100');
  const data = await response.json();

  const ListPokemon = data.map((pokemon) => {
    return (
      `<div class="card">
        <div class="card-header">
          ${pokemon.name}
        </div>
        <div class="card-body">
          <img src="${pokemon.image}">
        </div>
      </div>`
    )
  }).join("");
  


  res.render('pages/pokemon', {
    title: 'Pokemon',
    message: 'Welcome to the home page',
    pokes: data,
    ListPokemon,
  });
};


module.exports = {
  getPokemon,
};
