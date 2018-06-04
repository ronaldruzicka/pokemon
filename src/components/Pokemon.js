import React from "react";
import PropTypes from "prop-types";

import Pokeball from "../assets/pokeball.svg";

const Pokemon = ({ name, showDetail, url }) => {
  const showPokemonDetail = () => {
    showDetail(url);
  };

  return (
    <button
      className="button button--link app-button"
      onClick={showPokemonDetail}
    >
      <span className="icon icon--left">
        <Pokeball />
      </span>

      {name}
    </button>
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  showDetail: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
};

export default Pokemon;
