const root = document.getElementById("root");

const loadPokemonDetail = (pokemon) => {
  console.log("POKEMON:", pokemon.name)
  return `
            <div>
              <h1>pokemon.name/<h1>
            </div>
        `;
};

loadPokemonDetail();