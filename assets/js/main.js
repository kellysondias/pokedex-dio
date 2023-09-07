const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

const maxRecords = 151;
let offset = 0;
const limit = 10;

function loadPokemonItems(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const pokemonItems = pokemons
      .map((pokemon) => {
        return `
        <li class="pokemon ${pokemon.type}">
         <a href="#"> 
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ul class="types">
             ${pokemon.types
               .map(
                 (type) => `
              <li class="type ${type}">${type}</li>
             `
               )
               .join("")}
            </ul>
            <img src="${pokemon.image}" alt="${pokemon.name}" />
          </div>
         </a>
        </li>
      `;
      })
      .join("");

    pokemonList.innerHTML += pokemonItems;
  });
}

function addPokemonClickListener() {
  pokemonList.addEventListener("click", (event) => {
    if (event.target.classList.contains("pokemon")) {
      const clickedPokemon = event.target;
      console.log(clickedPokemon);
    }
  });
}

loadPokemonItems(offset, limit);

window.addEventListener("load", addPokemonClickListener);

loadMoreButton.addEventListener("click", () => {
  offset += limit;

  const qtdRecordsWithNextPage = offset + limit;

  if (qtdRecordsWithNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;

    loadPokemonItems(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else loadPokemonItems(offset, limit);
});
