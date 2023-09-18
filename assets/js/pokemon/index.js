const root = document.getElementById("root");

const loadPokemonProfile = () => {
  pokeApi.getPokemonProfile().then((pokemon) => {
    console.log("VAR:", pokemon.habitat);
    const weight = String(Number(pokemon.weight) / 10);
    const height = String(Number(pokemon.height).toFixed(1));
    function removerAcentos(texto) {
      return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    const about = pokemon.about
      .replace(/[^a-zA-ZáéíóúÁÉÍÓÚâêîôÂÊÎÔãõÃÕ. ]/g, " ")
      .replace(/[é]/g, "É");

    const pokemonProfile = `
            <div class="pokemon-profile ${pokemon.type}">
              <header>
              <a href="javascript:history.back()"
              > <i class="fa-solid fa-chevron-left" style="color: #000"></i
              ></a>
            <img
              src="https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png"
              alt="Pokémon Logo"
            />
          </header>
             <div> 
             <h1 style="color:#000;">${pokemon.name}<h1>
             ${pokemon.number}
             </br></br>
             ${about}
             </br></br>
             ${pokemon.types}
             ${weight} kg
             ${height} cm
             ${pokemon.shape}
             ${pokemon.habitat}
             <img src="${pokemon.image}" alt="${pokemon.name}'s appearance" />
             </div>
            </div>
        `;
    root.innerHTML += pokemonProfile;
  });
};

loadPokemonProfile();
