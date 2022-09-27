import Item from "./Item.js";
import { React, useState, useEffect } from "react";

function Shop() {
  const [cart, setCart] = useState([]);

  const products = [
    { name: "Steak", price: 10.25, qty: 0 },
    { name: "Burger", price: 6.25, qty: 0 },
    { name: "Jerky", price: 12.25, qty: 0 },
  ];

  return (
    <div className="shopping">
      <div className="product-list">
        {products.map((product, index) => (
          <Item
            key={index}
            name={product.name}
            price={product.price}
            qty={product.qty}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
