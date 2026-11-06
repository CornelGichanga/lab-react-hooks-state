import React, { useState } from "react";

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Shopping cart state
  const [cart, setCart] = useState([]);

  // Category filter state
  const [category, setCategory] = useState("All");

  // Products
  const products = [
    { id: 1, name: "Apple", price: 50, category: "Fruits" },
    { id: 2, name: "Banana", price: 20, category: "Fruits" },
    { id: 3, name: "Orange", price: 30, category: "Fruits" },
    { id: 4, name: "Carrot", price: 40, category: "Vegetables" },
    { id: 5, name: "Spinach", price: 35, category: "Vegetables" },
    { id: 6, name: "Tomato", price: 25, category: "Vegetables" },
    { id: 7, name: "Milk", price: 80, category: "Drinks" },
    { id: 8, name: "Juice", price: 100, category: "Drinks" }
  ];

  // Add product to cart
  const addToCart = (product) => {
    setCart((previousCart) => [...previousCart, product]);
  };

  // Filter products by category
  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>

      <header>
        <h1>Fresh Grocery Store</h1>

        <DarkModeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </header>

      <main>
        <div className="filter-section">
          <label htmlFor="category">Filter by Category: </label>

          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Drinks">Drinks</option>
          </select>
        </div>

        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
        />

        <Cart cart={cart} />
      </main>

    </div>
  );
}

export default App;