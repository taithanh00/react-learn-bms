// import React from 'react';
import PropTypes from 'prop-types';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.any,
  onSquareClick: PropTypes.func.isRequired,
};

export default Square;