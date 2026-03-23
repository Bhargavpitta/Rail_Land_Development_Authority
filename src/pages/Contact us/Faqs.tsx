import "./Faqs.css";

const Faqs = () => {
  return (
    <div className="faqs-page">
      <div className="faqs-banner">
        FAQs
      </div>

      <div className="faqs-container">

        <h2>FAQ</h2>

        <ul className="faq-list">
          <li>
            <a href="/pdfs/CONTACT_FAQ/20180821_FAQ_Final.pdf" target="_blank">
              FAQ
            </a>
          </li>

          <li>
            <a href="/pdfs/CONTACT_FAQ/RLDA e-Tendering Steps(1).pdf" target="_blank">
              E-Tendering Steps
            </a>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Faqs;