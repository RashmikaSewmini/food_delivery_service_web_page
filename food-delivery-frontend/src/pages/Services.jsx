import "./../styles/Services.css";

function Services() {
  return (
    <div className="services-page">

      <h1 className="page-title">Our Services</h1>

      <div className="services-card-container">

        <div className="service-card">
          <h2>Email Marketing</h2>
          <p>
            We help you reach your customers directly with powerful and engaging
            email campaigns to increase sales and loyalty.
          </p>
        </div>

        <div className="service-card">
          <h2>Campaigns</h2>
          <p>
            Our creative campaigns are designed to promote your brand and attract
            more customers to your business.
          </p>
        </div>

        <div className="service-card">
          <h2>Branding</h2>
          <p>
            We build strong brand identities that make your business stand out
            from the competition.
          </p>
        </div>

        <div className="service-card">
          <h2>Offline</h2>
          <p>
            We also provide offline marketing strategies to connect with customers
            beyond digital platforms.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Services;
