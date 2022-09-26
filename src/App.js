import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Shop from "./components/Shop.js";
import Navbar from "./components/Navbar.js";
import "./App.css";

// App.js will be the entry point for the router
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
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
