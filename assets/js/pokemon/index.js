const root = document.getElementById("root");

const loadPokemonProfile = () => {
  pokeApi
    .getPokemonProfile()
    .then(({ name, number, image, about, type, types, abilities }) => {
      console.log(abilities)
      const pokemonProfile = `
            <div class="${type}">
              <h1 style="color:#000;">${name}<h1>
              ${number}
              </br></br>
              ${about}
              </br></br>
              ${types}
              <img src="${image}" alt="${name}'s appearance" />
            </div>
        `;
      root.innerHTML += pokemonProfile;
    });
};

loadPokemonProfile();
