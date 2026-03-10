
const Pri = () => {
  return (
    <>
      <style>{`
        .pri-page {
          background: #f4f7fb;
          min-height: 100vh;
        }

        .pri-banner {
          background: #2f4f8f;
          color: white;
          padding: 28px 10%;
          font-size: 26px;
          font-weight: 600;
        }

        .pri-container {
          max-width: 1200px;
          margin: auto;
          padding: 40px 20px;
        }

        .pri-card {
          background: white;
          border: 1px solid #ddd;
          border-radius: 6px;
          padding: 28px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.08);
          line-height: 1.7;
          color: #444;
        }

        .pri-card p {
          margin-bottom: 16px;
        }
      `}</style>

      <div className="pri-page">

        <div className="pri-banner">
          Privacy Policy
        </div>

        <div className="pri-container">

          <div className="pri-card">

            <p>
              Indian Railway Portal does not automatically capture any specific
              personal information from you, such as your name, phone number,
              or email address.
            </p>

            <p>
              If the portal requests personal information, you will be informed
              about the purpose for which the information is collected, and
              appropriate security measures will be taken to protect it.
            </p>

            <p>
              We do not sell or share any personally identifiable information
              voluntarily provided on the portal to any third party.
            </p>

            <p>
              Certain information such as IP address, browser type, operating
              system, date, and time of visit may be collected for statistical
              analysis and to improve the user experience of the website.
            </p>

          </div>

        </div>

      </div>
    </>
  );
};

export default Pri;

