import "./../styles/About.css";

function About() {
  return (
    <div className="about-page">

      <h1 className="page-title">About Us</h1>

      <div className="about-card-container">

        <div className="about-card" id="ourstory">
          <h2>Our Story</h2>
          <p>
            We started our journey with a simple goal – to deliver fresh, delicious,
            and high-quality food straight to your doorstep with speed and care.
          </p>
        </div>

        <div className="about-card" id="benefits">
          <h2>Benefits</h2>
          <p>
            Enjoy fast delivery, affordable prices, wide food choices, and excellent
            customer service every time you order with us.
          </p>
        </div>

        <div className="about-card" id="team">
          <h2>Our Team</h2>
          <p>
            Our passionate team works day and night to ensure you receive the best
            food experience, from kitchen to doorstep.
          </p>
        </div>

        <div className="about-card" id="careers">
          <h2>Careers</h2>
          <p>
            Join our growing family and build your career with us. We are always
            looking for talented and motivated people.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
