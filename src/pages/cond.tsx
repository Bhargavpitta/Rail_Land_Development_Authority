
const Cond = () => {
  return (
    <>
      <style>{`
        .cond-page {
          background: #f4f7fb;
          min-height: 100vh;
        }

        .cond-banner {
          background: #2f4f8f;
          color: white;
          padding: 28px 10%;
          font-size: 26px;
          font-weight: 600;
        }

        .cond-container {
          max-width: 1200px;
          margin: auto;
          padding: 40px 20px;
        }

        .cond-card {
          background: white;
          border: 1px solid #ddd;
          border-radius: 6px;
          padding: 28px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.08);
        }

        .cond-link {
          color: #1a4ed8;
          font-weight: 600;
          text-decoration: underline;
        }

        .cond-link:hover {
          color: #0f2c8c;
        }
      `}</style>

      <div className="cond-page">

        <div className="cond-banner">
          Terms & Conditions
        </div>

        <div className="cond-container">

          <div className="cond-card">

            <a
              href="/pdfs/terms.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cond-link"
            >
              Terms and Conditions for Deputationists to Rail Land Development Authority (RLDA)
            </a>

          </div>

        </div>

      </div>
    </>
  );
};

export default Cond;

