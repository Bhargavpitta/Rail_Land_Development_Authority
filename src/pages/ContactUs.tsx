import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page">

      {/* Banner */}
      <div className="contact-banner">
        Contact Us
      </div>

      {/* Content */}
      <div className="contact-container">

        <div className="contact-card">

          <h3>Postal Address</h3>

          <p className="contact-org">
            Rail Land Development Authority
          </p>

          <p>
            Unit No.702-B, 7th Floor, Konnectus Tower-2 <br />
            DMRC Building, Ajmeri Gate <br />
            Delhi – 110002
          </p>

          <p className="contact-phone">
            <strong>EPABX No. :</strong>
            <span> 011-23232854 / 23232835 / 23212834</span>
          </p>

          <p className="contact-landmark">
            Landmark: Above Airport Metro Express Line, Opposite New Delhi
            Railway Station (Ajmeri Gate Side)
          </p>

        </div>

      </div>

    </div>
  );
};

export default ContactUs;