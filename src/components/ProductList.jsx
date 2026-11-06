
import React from "react";
import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Apple", price: 50, category: "Fruits" },
  { id: 2, name: "Banana", price: 20, category: "Fruits" },
  { id: 3, name: "Orange", price: 30, category: "Fruits" },
  { id: 4, name: "Carrot", price: 40, category: "Vegetables" },
  { id: 5, name: "Spinach", price: 35, category: "Vegetables" },
  { id: 6, name: "Tomato", price: 25, category: "Vegetables" },
  { id: 7, name: "Milk", price: 80, category: "Drinks" },
  { id: 8, name: "Juice", price: 100, category: "Drinks" }
];

function ProductList({ products = sampleProducts, addToCart }) {
  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
