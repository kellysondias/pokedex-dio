const pokemonData = JSON.parse(sessionStorage.getItem("pokemon"));

const pokemonProfile = new Pokemon(pokemonData.types);

pokeApi.getPokemonProfile = () => {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.number}`;

  return fetch(url)
    .then((response) => response.json())
    .then((about) => {
      pokemonProfile.number = pokemonData.number;
      pokemonProfile.name = pokemonData.name;
      pokemonProfile.image = pokemonData.image;
      pokemonProfile.type = pokemonData.iterableTypes[0];
      pokemonProfile.types = pokemonData.iterableTypes;
      pokemonProfile.about = about.flavor_text_entries[0].flavor_text      ;
      return pokemonProfile;
    });
};
