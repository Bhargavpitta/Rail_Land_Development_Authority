import "./Faq.css";

const faqFiles = [
  {
    title: "FAQs Document",
    file: "/pdfs/20180821_FAQ_Final.pdf"
  },
  {
    title: "RLDA e-Tendering Steps",
    file: "/pdfs/RLDA e-Tendering Steps(1).pdf"
  }
];

const Faq = () => {
  return (
    <div className="news-page">
      <div className="news-banner">
        <h1>FAQs</h1>
      </div>

      <div className="news-content">
        <p>
          Frequently asked questions related to RLDA projects, tenders and
          development initiatives.
        </p>

        <div className="faq-list">
          {faqFiles.map((item, index) => (
            <div key={index} className="faq-item">
              <a href={item.file} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;