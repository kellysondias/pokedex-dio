const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.id;
  pokemon.name = pokeDetail.name;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;

  pokemon.image = pokeDetail.sprites.other["official-artwork"].front_default;

  pokemon.abilities = pokeDetail.abilities.map(
    (abilitySlot) => abilitySlot.ability.name
  );

  return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) =>
  fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon);

pokeApi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails);
};

const setPokemonProfile = (
  number,
  name,
  image,
  stringTypes,
  abilities,
  habitat
) => {
  const iterableTypes = stringTypes.split(",");
  const pokemon = { number, name, image, iterableTypes, abilities, habitat };
  sessionStorage.setItem("pokemon", JSON.stringify(pokemon));
};
