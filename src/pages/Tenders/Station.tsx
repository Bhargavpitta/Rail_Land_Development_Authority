import "./Station.css";

const Station = () => {
  return (
    <div className="tender-page">
      <div className="tender-banner">
        <h1>Station Redevelopment (Active Tenders)</h1>
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
              <th>Tender/RFP/Quotation/Corrigendum Notice No.</th>
              <th>Description</th>
              <th>Last Date of Submission</th>
              <th>Date of Opening</th>
              <th>Detailed View</th>
            </tr>
          </thead>

          <tbody>

            {/* Main Tender Row */}
            <tr>
              <td>
                RFP Notice No. RLDA/2025/RFP/PPP/SRD/09 of 2025<br/>
                Dated: 01.10.2025
              </td>

              <td rowSpan={11}>
                Major upgradation of Vijayawada Railway Station through
                Design, Build, Finance, Operate and Transfer (DBFOT) mode
                on Public Private Partnership (PPP).
              </td>

              <td rowSpan={11}>
                30.03.2026 upto 15:00 Hrs
              </td>

              <td rowSpan={11}>
                30.03.2026 at 15:30 Hrs
              </td>

              <td rowSpan={11}>
                <a href="#">Click Here</a>
              </td>
            </tr>

            <tr>
              <td><a href="#">ADDENDUM No.01 dated 07.10.2025</a></td>
            </tr>

            <tr>
              <td><a href="#">ADDENDUM No.02 dated 08.10.2025</a></td>
            </tr>

            <tr>
              <td><a href="#">CORRIGENDUM No.1 dated 14.10.2025</a></td>
            </tr>

            <tr>
              <td><a href="#">ADDENDUM No.03 dated 17.10.2025</a></td>
            </tr>

            <tr>
              <td><a href="#">CORRIGENDUM No.2 dated 27.10.2025</a></td>
            </tr>

            <tr>
              <td><a href="#">ADDENDUM No.04 dated 03.11.2025</a></td>
            </tr>

            <tr>
              <td><a href="#">CORRIGENDUM No.3 dated 28.11.2025</a></td>
            </tr>

            <tr>
              <td><a href="#">Corrigendum No.04 dated 15.12.2025</a></td>
            </tr>

            <tr>
              <td><a href="#">Corrigendum No.05 dated 22.12.2025</a></td>
            </tr>

            <tr>
              <td><a href="#">Corrigendum No.06 dated 06.01.2026</a></td>
            </tr>

            <tr>
              <td><a href="#">Corrigendum No.07 dated 18.02.2026</a></td>
            </tr>

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default Station;