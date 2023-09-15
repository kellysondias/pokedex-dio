const root = document.getElementById("root");

/*
  - Entender melhor como setPokemonProfile funciona
  - Entender sessionStorage
  - Tentar transformar em SPA
*/

const setPokemonProfile = (number, name, image, types) => {
  const pokemon = { number, name, image, types };
  sessionStorage.setItem("pokemon", JSON.stringify(pokemon));
  const pokemonData = JSON.parse(sessionStorage.getItem("pokemon"));
  loadPokemonProfile(pokemonData)
};

const loadPokemonProfile = (pokemon) => {
  const html = `
            <div>
              <h1>${pokemon.name}<h1>
            </div>
        `;
  root.innerHTML += html;
};

//loadPokemonProfile();
