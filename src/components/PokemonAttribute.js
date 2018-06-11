import React from "react";
import PropTypes from "prop-types";

const PokemonAttribute = ({ children, text }) => {
  return (
    <div className="pokedex-attribute">
      <div className="pokedex-label">{text}</div>
      {children}
    </div>
  );
};

PokemonAttribute.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired
};

export default PokemonAttribute;
