const RTI = () => {
  return (
    <>
      <style>{`
        .rti-page {
          background: #f4f7fb;
          min-height: 100vh;
        }

        .rti-banner {
          background: #2f4f8f;
          color: white;
          padding: 28px 10%;
          font-size: 26px;
          font-weight: 600;
        }

        .rti-container {
          max-width: 1200px;
          margin: auto;
          padding: 40px 20px;
        }

        .rti-card {
          background: white;
          border: 1px solid #ddd;
          border-radius: 6px;
          padding: 24px;
          margin-bottom: 20px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.08);
        }

        .rti-card h3 {
          margin-bottom: 12px;
          font-size: 18px;
          color: #222;
        }

        .rti-card p {
          color: #444;
          line-height: 1.6;
        }

        .rti-link {
          color: #1a4ed8;
          font-weight: 600;
          text-decoration: underline;
        }

        .rti-link:hover {
          color: #0f2c8c;
        }

        .rti-name {
          font-weight: 600;
          color: #222;
          margin-bottom: 6px;
        }
      `}</style>

      <div className="rti-page">

        <div className="rti-banner">
          RTI
        </div>

        <div className="rti-container">

          {/* Guidelines Link */}
          <div className="rti-card">
            <a
              href="/pdfs/RTI_footer/Guide For the Central Public Information Officers.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rti-link"
            >
              Guidelines for the Officers designated as Central Public Information
              Officer under the Right to Information Act, 2005.
            </a>
          </div>

          {/* Section 1 */}
          <div className="rti-card">
            <h3>1. Address to whom RTI Application be sent</h3>

            <p className="rti-name">
              DEEPAK NARANG
            </p>

            <p>
              CPIO, Rail Land Development Authority <br />
              Unit No.702-B, 7th Floor, Konnectus Tower-2 <br />
              DMRC Building, Ajmeri Gate <br />
              New Delhi – 110002
            </p>
          </div>

          {/* Section 2 */}
          <div className="rti-card">
            <h3>2. Mode of Payment of Fee</h3>

            <p>
              Either through IPO/DD payable to ED/Finance/RLDA, New Delhi.
            </p>
          </div>

          {/* Section 3 */}
          <div className="rti-card">
            <h3>3. Name of First Appellate Authority</h3>

            <p className="rti-name">
              R. K. SRIVASTAVA, DEPUTY GENERAL MANAGER / LAW
            </p>

            <p>
              Rail Land Development Authority <br />
              Unit No.702-B, 7th Floor, Konnectus Tower-2 <br />
              DMRC Building, Ajmeri Gate <br />
              New Delhi – 110002
            </p>
          </div>

        </div>

      </div>
    </>
  );
};

export default RTI;

