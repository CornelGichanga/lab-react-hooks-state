
import React, { useState } from "react";

import ProductList, { sampleProducts } from "./components/ProductList";
import Cart from "./components/Cart";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const addToCart = (product) => {
    setCart((previousCart) => [...previousCart, product]);
  };

  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter(
          (product) => product.category === category
        );

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
          <label htmlFor="category">
            Filter by Category:
          </label>

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
