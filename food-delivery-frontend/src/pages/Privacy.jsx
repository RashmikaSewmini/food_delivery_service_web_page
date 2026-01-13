import "./../styles/Privacy.css";

function Privacy() {
  return (
    <div className="privacy-page">

      <h1 className="page-title">Legal & Support</h1>

      <div className="card-container">

        {/* Terms & Conditions */}
        <div className="info-card">
          <h2>Terms & Conditions</h2>
          <p>
            By using our service, you agree to follow our rules and guidelines.
            We ensure fair usage, quality service, and transparency in all operations.
          </p>
        </div>

        {/* Privacy Policy */}
        <div className="info-card">
          <h2>Privacy Policy</h2>
          <p>
            Your privacy is very important to us. We do not share your personal
            information with third parties and ensure data security at all times.
          </p>
        </div>

        {/* FAQs */}
        <div className="info-card">
          <h2>FAQs</h2>
          <p>
            Find answers to common questions about ordering, delivery, payment
            methods, and account management.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Privacy;
