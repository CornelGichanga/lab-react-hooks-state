import React from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
      <h3>{product.name}</h3>
      <p style={{ color: '#888', fontSize: '0.9em' }}>{product.category}</p>
      <p style={{ fontWeight: 'bold' }}>${product.price.toFixed(2)}</p>
      <button 
        onClick={() => onAddToCart(product)}
        style={{
          padding: '6px 12px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
