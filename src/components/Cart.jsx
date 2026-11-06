import React from 'react';

function Cart({ cartItems }) {
  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {cartItems.map(item => (
        <li 
          key={item.id} 
          style={{ 
            padding: '10px', 
            marginBottom: '8px', 
            backgroundColor: 'rgba(0, 123, 255, 0.1)', 
            borderRadius: '4px',
            borderLeft: '4px solid #007bff'
          }}
        >
          {item.name} is in your cart.
        </li>
      ))}
    </ul>
  );
}

export default Cart;
