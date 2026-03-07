import "./Faqs.css";

const Faqs = () => {
  return (
    <div className="faqs-page">
      <div className="faqs-banner">
        <h1>FAQs</h1>
      </div>

      <div className="faqs-content">
        <p>
          This section contains frequently asked questions related to
          RLDA services, railway land development projects, tenders,
          and general website information.
        </p>

        <div className="faq-item">
          <h3>What is RLDA?</h3>
          <p>
            RLDA (Rail Land Development Authority) is a statutory authority
            under the Ministry of Railways responsible for development of
            railway land for commercial use.
          </p>
        </div>

        <div className="faq-item">
          <h3>How can I participate in RLDA tenders?</h3>
          <p>
            Tender information is available under the Tenders/e-Auctions
            section of the RLDA website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;