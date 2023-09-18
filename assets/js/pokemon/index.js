const root = document.getElementById("root");

// Colocar: habitat, shape, height, weight

const loadPokemonProfile = () => {
  pokeApi.getPokemonProfile().then((pokemon) => {
    console.log("HABITAT:", pokemon.habitat);
    const pokemonProfile = `
            <div class="${pokemon.type}">
              <h1 style="color:#000;">${pokemon.name}<h1>
              ${pokemon.number}
              </br></br>
              ${pokemon.about}
              </br></br>
              ${pokemon.types}
              <img src="${pokemon.image}" alt="${pokemon.name}'s appearance" />
            </div>
        `;
    root.innerHTML += pokemonProfile;
  });
};

loadPokemonProfile();
