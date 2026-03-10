import "./Colony.css";

const Colony = () => {
  const tenders = [
    {
      notice: "RFP No. RLDA/RFP/CD/23 of 2026",
      desc: "Grant of Lease of 18739.18 Sqm at railway colony near Asuran Chowk, Gorakhpur, U.P. for redevelopment for 99 years.",
      lastDate: "22.04.2026 upto 15:00 Hrs",
      opening: "22.04.2026 at 15:30 Hrs",
    },
    {
      notice: "RFP No. RLDA/2026/RFP/CRD/08 of 2026",
      desc: "Grant of Lease of 34,517 sq.m Railway Land for Residential Development at Railway Colony in Bengaluru Division of South Western Railway.",
      lastDate: "18.03.2026 upto 15:00 Hrs",
      opening: "18.03.2026 at 15:30 Hrs",
    },
    {
      notice: "RFP No. RLDA/2025/RFP/CRD-15 of 2025",
      desc: "Grant of Lease for Redevelopment of Railway Colonies (Sector I & II) at Cuttack for 99 years.",
      lastDate: "06.03.2026 upto 15:00 Hrs",
      opening: "06.03.2026 at 15:30 Hrs",
    }
  ];

  return (
    <div className="tender-page">

      <div className="tender-banner">
        <h1>Colony Redevelopment (Active Tenders)</h1>
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
            {tenders.map((tender, index) => (
              <tr key={index}>
                <td>{tender.notice}</td>
                <td>{tender.desc}</td>
                <td>{tender.lastDate}</td>
                <td>{tender.opening}</td>
                <td>
                  <a href="#">Click Here</a>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default Colony;