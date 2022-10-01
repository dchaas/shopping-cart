import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Shop from "./components/Shop.js";
import Cart from "./components/Cart.js";
import Navbar from "./components/Navbar.js";
import { React, useState, useEffect } from "react";
import "./App.css";
import seasonsedsteak from "./assets/seasonedsteak.jpg";
import burger from "./assets/burger.jpg";
import roast from "./assets/roast.jpg";

// App.js will be the entry point for the router
function App() {
  const inventory = [
    { name: "Steak", price: 10.25, qty: 0, img: seasonsedsteak },
    { name: "Burger", price: 6.25, qty: 0, img: burger },
    { name: "Roast", price: 12.25, qty: 0, img: roast },
  ];

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(inventory);

  function findProductByName(name) {
    let id = 0;

    for (let i = 0; i < products.length; i++) {
      if (products[i].name === name) {
        return i;
      }
    }
  }

  function checkIfInCart(prod) {
    let inCart = false;
    if (cart.length > 0) {
      cart.forEach((item) => {
        if (item.name === prod.name) {
          inCart = true;
        }
      });
    }
    return inCart;
  }

  function clickPlus(event) {
    let name = event.target.getAttribute("name");
    let id = findProductByName(name);
    let updated = products;
    updated[id].qty++;
    setProducts([...updated]);
  }

  function clickMinus(event) {
    let name = event.target.getAttribute("name");
    let id = findProductByName(name);
    let updated = products;
    updated[id].qty--;
    setProducts([...updated]);
  }

  function clickAdd(event) {
    let name = event.target.getAttribute("name");
    let id = findProductByName(name);
    if (!checkIfInCart(products[id])) {
      setCart([...cart, products[id]]);
    }
    console.log(cart);
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              products={products}
              clickPlus={clickPlus}
              clickMinus={clickMinus}
              clickAdd={clickAdd}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
components needed:
  Card
  Navbar
  CartStatus
  Home
  Cart
  Product (page)
*/
