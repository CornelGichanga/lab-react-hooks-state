
import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">

      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>

      <p>Price: KSh {product.price}</p>

      <button
        data-testid={`product-${product.id}`}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;
