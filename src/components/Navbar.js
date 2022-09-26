import { Link } from "react-router-dom";
import meats from "../assets/meats.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={meats}></img>
      <div className="nav-links">
        <Link className="lnk" to="/">
          Home
        </Link>
        <Link className="lnk" to="/shop">
          Shop
        </Link>
        <Link className="lnk" to="/cart">
          Cart
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
