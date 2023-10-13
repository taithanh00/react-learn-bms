// import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import PropTypes from "prop-types";
import { useState } from "react";
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

FilterableProductTable.propTypes = {
  products: PropTypes.array.isRequired,
  // filterText: PropTypes.array.isRequired,
  // setFilterText: PropTypes.array.isRequired,
  // inStockOnly: PropTypes.array.isRequired,
  // setInStockOnly: PropTypes.array.isRequired,
};

export default FilterableProductTable;
