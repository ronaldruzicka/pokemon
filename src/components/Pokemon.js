import React from "react";
import PropTypes from "prop-types";

const Pokemon = ({ name, showDetail, url }) => {
  const showPokemonDetail = () => {
    showDetail(url);
  };

  return <button onClick={showPokemonDetail}>{name}</button>;
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Pokemon;
