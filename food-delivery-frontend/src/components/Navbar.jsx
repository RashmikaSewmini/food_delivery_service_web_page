import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo a"><Link to="/">🍽 Food Delivery Web</Link></div>

      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" />

        <div className="cart-icon">
          <FaShoppingCart />
          <span className="cart-badge">2</span>
          <tab></tab>
        </div>

      </div>
      
    </nav>
  );
}

export default Navbar;
