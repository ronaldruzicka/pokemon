import React from "react";
import PropTypes from "prop-types";

const Label = ({ children, text }) => {
  return (
    <div className="pokedex-stat">
      <div className="pokedex-label">{text}</div>
      {children}
    </div>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired
};

export default Label;
