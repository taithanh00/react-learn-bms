// import React from 'react';

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

const Products = () => {
  return (
    <div>
      {/* You can directly use the PRODUCTS constant here */}
      {PRODUCTS.map((product, index) => (
        <div key={index}>
          Category: {product.category}, Name: {product.name}, Price: {product.price}
        </div>
      ))}
    </div>
  );
};

export default Products;
