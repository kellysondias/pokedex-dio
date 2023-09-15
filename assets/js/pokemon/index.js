const root = document.getElementById("root");

/*
  Refatoração:
    - Tentar transformar em SPA
    - Mudar o title da página
*/

const setPokemonProfile = (number, name, image, stringTypes) => {
  const iterableTypes = stringTypes.split(",")
  const pokemon = { number, name, image, iterableTypes };
  sessionStorage.setItem("pokemon", JSON.stringify(pokemon));
};

const loadPokemonProfile = () => {
  const pokemon = JSON.parse(sessionStorage.getItem("pokemon"));

  const types = Array.from(pokemon.iterableTypes)
  console.log(pokemon)

  const pokemonProfile = `
            <div>
              <h1 style="color:#000;">${pokemon.name}<h1>
            </div>
        `;
  root.innerHTML += pokemonProfile;
};

loadPokemonProfile();
