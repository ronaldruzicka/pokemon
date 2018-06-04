import React from "react";
import PropTypes from "prop-types";

const PokemonDetail = ({ pokemonData }) => {
  console.log(pokemonData)
  const { baseExperience, images, name, weight } = pokemonData;

  return (
    <div>
      {images.male && (
        <div>
          male
          <img src={images.male} alt={name} />
        </div>
      )}

      {images.female && (
        <div>
          female
          <img src={images.female} alt={name} />
        </div>
      )}

      <div className="">name: {name}</div>
      <div className="">weight: {weight}kg</div>
      <div className="">baseExperience: {baseExperience}</div>
    </div>
  );
};

PokemonDetail.propTypes = {
  pokemonData: PropTypes.shape({
    baseExperience: PropTypes.number.isRequired,
    images: PropTypes.shape({
      male: PropTypes.string.isRequired,
      female: PropTypes.string
    }).isRequired,
    name: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired
  }).isRequired
};

export default PokemonDetail;
