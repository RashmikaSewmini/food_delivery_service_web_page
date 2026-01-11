import "../styles/Contact.css";
import MAP from "../assets/map.jpg";

export default function Contact() {
  return (
    <div className="contact-container">
      {/* LEFT FORM */}
      <div className="contact-form">
        <br/>
        <br/>
        <br/>
        <h1>Contact us</h1>

        <p className="contact-desc">
          Need an experienced and skilled hand with custom IT projects?
          <br />
          Fill out the form to get a free consultation.
        </p>

        <form>
          <input type="text" placeholder="Your Company Name" />
          <input type="text" placeholder="Nature of Business" />

          <div className="row">
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Postcode" />
          </div>

          <input type="text" placeholder="Contact name" />
          <input type="tel" placeholder="Contact Phone" />
          <input type="email" placeholder="email@gmail.com" />

          <div className="checkbox-group">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">
              I want to protect my data by signing an NDA
            </label>
          </div>

          <button type="submit" id="submit-btn">Submit</button>
        </form>
      </div>

      {/* RIGHT INFO */}
      <div className="contact-info">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h3>Offices</h3>

        <p>No:xxxx,xxxx,xxxxx.</p>

        <div className="office">
          <strong>XXXXXXXX</strong>
          <p>xxxxx xxxxx xxxxx</p>
        </div>

        <div className="office">
          <strong>XXXXXXXX</strong>
          <p>xxxx xxx xxxxx xxxxx</p>
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
