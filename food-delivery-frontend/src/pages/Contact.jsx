import "../styles/Contact.css";
import MAP from "../assets/map.jpg";
import { useState } from "react";
import axios from "axios";

export default function Contact() {

  const [formData, setFormData] = useState({
    companyName: "",
    businessNature: "",
    address: "",
    postcode: "",
    contactName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully");
      setFormData({
        companyName: "",
        businessNature: "",
        address: "",
        postcode: "",
        contactName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send messages");
    }
  };


  return (
    <div className="contact-container">
      {/* LEFT FORM */}
      <div className="contact-form">
        <h1>Contact us</h1>

        <p className="contact-desc">
          Have a question, feedback, or need support with your food order?
          <br />
          Fill out the form and our team will get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="companyName"
              placeholder="Your Company Name"
              value={formData.companyName}
              onChange={handleChange}
            />

            <input
              type="text"
              name="businessNature"
              placeholder="Nature of Business"
              value={formData.businessNature}
              onChange={handleChange}
            />

            <div className="row">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
              />

              <input
                type="text"
                name="postcode"
                placeholder="Postcode"
                value={formData.postcode}
                onChange={handleChange}
              />
            </div>

            <input
              type="text"
              name="contactName"
              placeholder="Contact name"
              value={formData.contactName}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Contact Phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="email@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" id="submit-btn">Send Message</button>
          </form>

      </div>

      {/* RIGHT INFO */}
      <div className="contact-info">
        <h3>Offices</h3>
        <p>No 45, Galle Road, Colombo 03, Sri Lanka</p>

        <div className="office">
          <strong>Colombo Office</strong>
          <br/>
          <span>+94 11 234 5678</span>
          <br/>
          <span>support@foodgo.lk</span>
        </div>

        <div className="office">
          <strong>Kandy Office</strong>
          <br/>
          <span>+94 81 223 4455</span>
          <br/>
          <span>kandy@foodgo.lk</span>
        </div>

        <div className="map">
          <iframe
            title="map"
            src={MAP}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
