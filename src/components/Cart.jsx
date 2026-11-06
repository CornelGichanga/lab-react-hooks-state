import React from "react";

function Cart({ cart }) {
  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <div className="cart">

      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={`${product.id}-${index}`}>
              {product.name} - KSh {product.price}
            </li>
          ))}
        </ul>
      )}

      <h3>Total: KSh {total}</h3>

      <p>Items in cart: {cart.length}</p>

    </div>
  );
}

export default Cart;