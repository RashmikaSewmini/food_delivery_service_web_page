import "./../styles/Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowRight } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>Subscribe to our newsletter</h2>
          <div className="subscribe-box">
            <input type="email" placeholder="Email Address" style={{background: "transparent", color: "white"}} />
            <button><FaArrowRight/></button>
          </div>
        </div>


        <div className="footer-section">
          <h3>services</h3>
          <ul>
            <li>Email Marketing</li>
            <li>Campaigns</li>
            <li>Branding</li>
            <li>Offline</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li>Our Story</li>
            <li>Benefits</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      {/* Social Media */}

        <div className="footer-bottom">
          <div className="footer-links">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
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
