import React from "react";
import PropTypes from "prop-types";

import Pokeball from "../assets/pokeball.svg";
import PokemonDetail from "./PokemonDetail";

const Pokemon = ({ name, selectedPokemon, showDetail, url }) => {
  const showPokemonDetail = () => {
    showDetail(name, url);
  };

  return (
    <React.Fragment>
      <button
        className="button button--link pokedex-button"
        onClick={showPokemonDetail}
      >
        <span className="icon icon--left">
          <Pokeball />
        </span>

        {name}
      </button>

      {selectedPokemon ? (
          selectedPokemon.name === name && <PokemonDetail pokemonData={selectedPokemon} />
        ) : null}
    </React.Fragment>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  showDetail: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
};

export default Pokemon;
