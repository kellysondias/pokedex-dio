const pokemonData = JSON.parse(sessionStorage.getItem("pokemon"));

const pokemonProfile = new Pokemon();

const getEngAbout = (texts) => {
  const engTexts = texts.filter(({ language }) => language.name === "en");
  const flavorTexts = engTexts.map((flavorText) => flavorText.flavor_text);

  const [flavor_text] = flavorTexts;

  return flavor_text;
};

const setPokemonProfile = (
  number,
  name,
  image,
  stringTypes,
  abilities,
  weight,
  height
) => {
  const iterableTypes = stringTypes.split(",");
  const pokemon = {
    number,
    name,
    image,
    iterableTypes,
    abilities,
    weight,
    height,
  };
  sessionStorage.setItem("pokemon", JSON.stringify(pokemon));
};

pokeApi.getPokemonProfile = () => {
  const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.number}`;

  return fetch(speciesUrl)
    .then((response) => response.json())
    .then(({ flavor_text_entries, shape, habitat }) => {
      pokemonProfile.name = pokemonData.name;
      pokemonProfile.number = pokemonData.number;
      pokemonProfile.types = pokemonData.iterableTypes;
      pokemonProfile.type = pokemonData.iterableTypes[0];
      pokemonProfile.image = pokemonData.image;
      pokemonProfile.abilities = pokemonData.abilities;
      pokemonProfile.weight = pokemonData.weight;
      pokemonProfile.height = pokemonData.height;
      pokemonProfile.shape = shape.name;
      pokemonProfile.habitat = habitat.name;
      pokemonProfile.about = getEngAbout(flavor_text_entries);
      return pokemonProfile;
    });
};
