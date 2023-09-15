const root = document.getElementById("root");

/*
  - Entender sessionStorage
  - Tentar transformar em SPA
*/

const setPokemonProfile = (number, name, image, types) => {
  const pokemon = { number, name, image, types};
  sessionStorage.setItem("pokemon", JSON.stringify(pokemon));
  window.location.href = "pokemon.html";
};

const pokeData = JSON.parse(sessionStorage.getItem("pokemon"))

const loadPokemonProfile = (pokemon) => {
  const html = `
            <div>
              <h1>${pokemon.name}<h1>
            </div>
        `;
  root.innerHTML += html;
};

loadPokemonProfile(pokeData);
