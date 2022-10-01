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
import tenderloin from "./assets/tenderloin.jpg";
import shavedsteak from "./assets/shavedsteak.jpg";

// App.js will be the entry point for the router
function App() {
  const inventory = [
    { name: "Steak", price: 10.77, qty: 0, img: seasonsedsteak },
    { name: "Burger", price: 6.3, qty: 0, img: burger },
    { name: "Roast", price: 12.19, qty: 0, img: roast },
    { name: "Tenderloin", price: 8.99, qty: 0, img: tenderloin },
    { name: "Shaved Steak", price: 9.37, qty: 0, img: shavedsteak },
  ];

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(inventory);

  function findProductByName(name, list) {
    let id = 0;

    for (let i = 0; i < list.length; i++) {
      if (list[i].name === name) {
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
    let id = findProductByName(name, products);
    let updated = products;
    updated[id].qty++;
    setProducts([...updated]);
  }

  function clickMinus(event) {
    let name = event.target.getAttribute("name");
    let id = findProductByName(name, products);
    let updated = products;
    updated[id].qty--;
    setProducts([...updated]);
  }

  function removeItem(event) {
    let name = event.target.getAttribute("name");
    let id = findProductByName(name, cart);
    console.log(id);
    let updated = cart.filter((item, index) => {
      return index !== id;
    });
    setCart([...updated]);
  }

  function clickAdd(event) {
    let name = event.target.getAttribute("name");
    let id = findProductByName(name, products);
    if (!checkIfInCart(products[id])) {
      setCart([...cart, products[id]]);
    }
  }

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
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
        <Route
          path="/cart"
          element={<Cart cart={cart} removeItem={removeItem} />}
        />
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
