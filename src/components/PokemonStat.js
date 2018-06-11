import React from "react";
import PropTypes from "prop-types";

const PokemonStat = ({ name, value }) => {
  const style = {
    height: `${value}px`
  };

  return (
    <div className="pokedex-stat">
      <div className="pokedex-statValue" style={style} />
      <div className="pokedex-statLabel">{name}</div>
    </div>
  );
};

PokemonStat.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default PokemonStat;
