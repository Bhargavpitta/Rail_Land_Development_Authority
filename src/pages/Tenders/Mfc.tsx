import "./Mfc.css";

const Mfc = () => {
  return (
    <div className="tender-page">
      <div className="tender-banner">
        <h1>MFC (Active Tenders)</h1>
      </div>

      <div className="tender-content">

        <p className="participation-link">
          <a
            href="https://www.tenderwizard.com/RLDA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Participation Link for e-Tender (RLDA e-Tenders)
          </a>
        </p>

        <table className="tender-table">
          <thead>
            <tr>
              <th>Tender/RFP/Quotation/ Corrigendum Notice No.</th>
              <th>Description</th>
              <th>Last Date of Submission</th>
              <th>Date of Opening</th>
              <th>Detailed View</th>
            </tr>
          </thead>

          <tbody>
            {/* Currently no active tenders */}
            <tr>
              <td colSpan={5} className="no-data">
                No Active Tenders Available
              </td>
            </tr>
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default Mfc;