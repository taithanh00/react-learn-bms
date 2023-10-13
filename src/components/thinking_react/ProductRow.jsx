// import React from "react";
import PropTypes from "prop-types";

function ProductRow({ product }) {
  let name;

  if (product.stocked === true) {
    name = product.name;
  } else {
    name = <span style={{ color: "red" }}>{product.name}</span>;
  }

  return (  
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

ProductRow.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductRow;
