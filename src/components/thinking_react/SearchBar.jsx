// import React from "react";
import PropTypes from "prop-types";
function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}
SearchBar.propTypes = {
  onFilterTextChange: PropTypes.any.isRequired,
  onInStockOnlyChange: PropTypes.any.isRequired,
  filterText: PropTypes.any.isRequired,
  inStockOnly: PropTypes.any.isRequired,
};
export default SearchBar;
