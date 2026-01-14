import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { FaSearch, FaShoppingCart, FaTimes, FaBars, FaUser } from "react-icons/fa";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchTerm.toLowerCase().trim();

    if (query === "home") navigate("/home");
    else if (query === "menu") navigate("/menu");
    else if (query === "contact") navigate("/contact");
    else if (query === "shop") navigate("/shop");
    else navigate("/notfound");

    setSearchTerm("");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🍽 Food Delivery Web</Link>
      </div>

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
        {/* AUTH BUTTON */}
        <div className="auth-section">
          {user ? (
            <>
              <span className="username">Hi, {user.user.username}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="login-btn">
              <FaUser /> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
