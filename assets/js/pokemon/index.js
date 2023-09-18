const root = document.getElementById("root");

const loadPokemonProfile = () => {
  pokeApi.getPokemonProfile().then(pokemon => {
    console.log(pokemon)
    const pokemonProfile = `
            <div>
              <h1 style="color:#000;">${pokemon.name}<h1>
            </div>
        `;
    root.innerHTML += pokemonProfile;
  })
};

loadPokemonProfile();