import { Link } from "react-router-dom";
import meats from "../assets/meats.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={meats}></img>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
    </nav>
  );
}

export default Navbar;
