import React from "react";
import PropTypes from "prop-types";

import IconMale from "../assets/male.svg";
import IconFemale from "../assets/female.svg";
import IconClipBoard from "../assets/clipboard-list.svg";

import format from "../lib/format";

import PokemonStat from './PokemonStat'
import PokemonType from './PokemonType'

const PokemonDetail = ({ pokemonData }) => {
  const { height, id, images, name, stats, types, weight } = pokemonData;

  console.log(stats)

  return (
    <div className="pokedex-detail">
      <div className="pokedex-detailHeader">
        {images.male && (
          <div className="pokedex-image">
            <img src={images.male} alt={name} />
          </div>
        )}

        {images.female && (
          <div className="pokedex-image">
            <img src={images.female} alt={name} />
          </div>
        )}

        <div className="pokedex-name">
          {`${format.toSentenceCase(name)} #${id}`}
        </div>
      </div>

      <div className="pokedex-info">
        <div className="pokedex-stats">
          <div className="pokedex-icon icon">
            <IconClipBoard />
          </div>

          <PokemonStat text="Height">{height}m</PokemonStat>

          <PokemonStat text="Weight">{weight / 10}kg</PokemonStat>

          <PokemonStat text="Gender">
            <div className="pokedex-gender">
              {images.male && (
                <div className="pokedex-genderIcon icon">
                  <IconMale />
                </div>
              )}

              {images.female && (
                <div className="pokedex-genderIcon icon">
                  <IconFemale />
                </div>
              )}
            </div>
          </PokemonStat>
        </div>

        <h2 className="pokedex-name">Type</h2>

        <div className="pokedex-typeList">
          {
            types.map(type => <PokemonType key={type} type={type} />)
          }
        </div>
      </div>
    </div>
  );
};

PokemonDetail.propTypes = {
  pokemonData: PropTypes.shape({
    height: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    images: PropTypes.shape({
      male: PropTypes.string,
      female: PropTypes.string
    }).isRequired,
    name: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    weight: PropTypes.number.isRequired
  }).isRequired
};

export default PokemonDetail;
