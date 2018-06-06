import React from "react";
import PropTypes from "prop-types";

import IconMale from "../assets/mars.svg";
import IconFemale from "../assets/venus.svg";
import IconClipBoard from "../assets/clipboard-list.svg";

import format from "../lib/format";

const PokemonDetail = ({ pokemonData }) => {
  const { baseExperience, images, name, weight } = pokemonData;

  return (
    <div className="pokedex-detail">
      <div className="pokedex-detailHeader">
        {images.male && (
          <div className="pokedex-image">
            <img src={images.male} alt={name} />
            <div className="pokedex-gender icon">
              <IconMale />
            </div>
          </div>
        )}

        {images.female && (
          <div className="pokedex-image">
            <img src={images.female} alt={name} />
            <div className="pokedex-gender icon">
              <IconFemale />
            </div>
          </div>
        )}
      </div>

      <div className="pokedex-stats">
        <div className="pokedex-icon icon">
          <IconClipBoard />
        </div>
        <div className="pokedex-stat">
          <span className="pokedex-label">Name:</span>{" "}
          {format.toSentenceCase(name)}
        </div>
        <div className="pokedex-stat">
          <span className="pokedex-label">Weight:</span> {weight}kg
        </div>
        <div className="pokedex-stat">
          <span className="pokedex-label">BaseExperience:</span>{" "}
          {baseExperience}
        </div>
      </div>
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
