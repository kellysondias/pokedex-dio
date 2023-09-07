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

loadPokemonItems(offset, limit);

/*
- Levar dados do array de pokemon para a página de detalhes do pokémon

  - Descobrir por quê o load não está funcionando h
	- Criar event listener nos li's
	- Mandar dados pelo event listener
*/

loadMoreButton.addEventListener("click", () => {
  offset += limit;

  const qtdRecordsWithNextPage = offset + limit;

  if (qtdRecordsWithNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;

    loadPokemonItems(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else loadPokemonItems(offset, limit);
});

function addPokemonClickListener() {
  const pokemonLi = document.querySelector(".pokemon");
  console.log("Tag '</li>':", pokemonLi);
  pokemonLi.addEventListener("click", (event) => {
    console.log(event.target);
  });
}

window.addEventListener("load", addPokemonClickListener);
