import "./../styles/Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function Footer() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/subscribe", { email });
      setMessage("Subscribed successfully");
      setEmail("");
    } catch (error) {
      setMessage("Already subscribed or error");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>Subscribe to our newsletter</h2>
          <div className="subscribe-box">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ background: "transparent", color: "white" }}
            />
            <button onClick={handleSubscribe}>
              <FaArrowRight />
            </button>
          </div>

          {message && <p style={{ color: "orange", marginTop: "10px" }}>{message}</p>}

        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><Link to="/services">Email Marketing</Link></li>
            <li><Link to="/services">Campaigns</Link></li>
            <li><Link to="/services">Branding</Link></li>
            <li><Link to="/services">Offline</Link></li>
          </ul>
        </div>


        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><Link to="/about#ourstory">Our Story</Link></li>
            <li><Link to="/about#benefits">Benefits</Link></li>
            <li><Link to="/about#team">Team</Link></li>
            <li><Link to="/about#careers">Careers</Link></li>
          </ul>
        </div>


        {/* Contact Info */}
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li><Link to="/privacy">FAQs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

      </div>
      {/* Social Media */}

        <div className="footer-bottom">
          <div className="footer-links">
          <span><Link to="/privacy">Terms & Conditions</Link></span>
          <span><Link to="/privacy">Privacy Policy</Link></span>
        </div>


          <div className="footer-social">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>


    </footer>
  );
}

export default Footer;
