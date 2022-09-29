import Item from "./Item.js";
import { React, useState, useEffect } from "react";
import seasonsedsteadk from "../assets/seasonedsteak.jpg";
import burger from "../assets/burger.jpg";
import roast from "../assets/roast.jpg";

function Shop() {
  const [cart, setCart] = useState([]);

  const products = [
    { name: "Steak", price: 10.25, qty: 0, img: seasonsedsteadk },
    { name: "Burger", price: 6.25, qty: 0, img: burger },
    { name: "Roast", price: 12.25, qty: 0, img: roast },
  ];

  return (
    <div className="shopping">
      <div className="product-list">
        {products.map((product, index) => (
          <Item item={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
