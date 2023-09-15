const root = document.getElementById("root");

const goToProfile = (number, name, image, types) => {
  const pokemon = { number, name, image, types};
  sessionStorage.setItem("pokemon", JSON.stringify(pokemon));
  window.location.href = "pokemon.html";
};

const pokemonData = JSON.parse(sessionStorage.getItem("pokemon"))
console.log(pokemonData);

const loadPokemonDetail = (pokemon) => {
  const html = `
            <div>
              <h1>${pokemon.name}<h1>
            </div>
        `;
  root.innerHTML += html;
};

loadPokemonDetail(pokemonData);
