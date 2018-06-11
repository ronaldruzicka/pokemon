import React from 'react'
import PropTypes from 'prop-types'

import format from '../lib/format'

const PokemonType = ({ type }) => {
  return (
    <div className={`pokedex-type pokedex-type--${type}`}>
      {format.toSentenceCase(type)}
    </div>
  )
}

PokemonType.propTypes = {
  type: PropTypes.string.isRequired
}

export default PokemonType
