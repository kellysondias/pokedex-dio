const pokemonData = JSON.parse(sessionStorage.getItem("pokemon"));

const pokemonProfile = new Pokemon();

const getEngAbout = (texts) => {
  const engTexts = texts.filter(({ language }) => language.name === "en");
  const flavorTexts = engTexts.map((flavorText) => flavorText.flavor_text)

  const [flavor_text] = flavorTexts

  return flavor_text
};

// Colocar: habitat, shape, height, weight, abilities

pokeApi.getPokemonProfile = () => {
  const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.number}`;

  return fetch(speciesUrl)
    .then((response) => response.json())
    .then(({ flavor_text_entries }) => {
      pokemonProfile.name = pokemonData.name;
      pokemonProfile.number = pokemonData.number;
      pokemonProfile.types = pokemonData.iterableTypes;
      pokemonProfile.type = pokemonData.iterableTypes[0];
      pokemonProfile.image = pokemonData.image;
      pokemonProfile.abilities = pokemonData.abilities;
      pokemonProfile.about = getEngAbout(flavor_text_entries);
      return pokemonProfile;
    });
};
