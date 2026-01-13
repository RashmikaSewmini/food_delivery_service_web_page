import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FaSearch, FaShoppingCart, FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Navbar() {

  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchTerm.toLowerCase().trim();

    if (query === "home" || query === "Home") navigate("/home");
    else if (query === "menu" || query === "Menu") navigate("/menu");
    else if (query === "contact" || query === "Contact") navigate("/contact");
    else if (query === "shop" || query === "Shop") navigate("/shop");
    else navigate("/notfound");

    setSearchTerm("");
  };

  return (
    <nav className="navbar">
      <div className="logo a"><Link to="/">🍽 Food Delivery Web</Link></div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
      </ul>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

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
