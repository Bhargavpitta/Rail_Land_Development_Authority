import "./Summary.css";

const Summary = () => {

  const tenders = [
    { month: "February-2026", report: "Consolidated e-Tendering Report on Tenders (February-2026)" },
    { month: "January-2026", report: "Consolidated e-Tendering Report on Tenders (January-2026)" },
    { month: "December-2025", report: "Consolidated e-Tendering Report on Tenders (December-2025)" },
    { month: "November-2025", report: "Consolidated e-Tendering Report on Tenders (November-2025)" },
    { month: "October-2025", report: "Consolidated e-Tendering Report on Tenders (October-2025)" },
    { month: "September-2025", report: "Consolidated e-Tendering Report on Tenders (September-2025)" },
    { month: "August-2025", report: "Consolidated e-Tendering Report on Tenders (August-2025)" },
    { month: "July-2025", report: "Consolidated e-Tendering Report on Tenders (July-2025)" },
    { month: "June-2025", report: "Consolidated e-Tendering Report on Tenders (June-2025)" },
    { month: "May-2025", report: "Consolidated e-Tendering Report on Tenders (May-2025)" },
    { month: "April-2025", report: "Consolidated e-Tendering Report on Tenders (April-2025)" },
    { month: "March-2025", report: "Consolidated e-Tendering Report on Tenders (March-2025)" },
    { month: "February-2025", report: "Consolidated e-Tendering Report on Tenders (February-2025)" },
    { month: "January-2025", report: "Consolidated e-Tendering Report on Tenders (January-2025)" },
    { month: "December-2024", report: "Consolidated e-Tendering Report on Tenders (December-2024)" },
    { month: "November-2024", report: "Consolidated e-Tendering Report on Tenders (November-2024)" },
    { month: "October-2024", report: "Consolidated e-Tendering Report on Tenders (October-2024)" },
    { month: "September-2024", report: "Consolidated e-Tendering Report on Tenders (September-2024)" },
    { month: "August-2024", report: "Consolidated e-Tendering Report on Tenders (August-2024)" },
    { month: "July-2024", report: "Consolidated e-Tendering Report on Tenders (July-2024)" },
  ];

  return (
    <div className="tender-page">

      <div className="tender-banner">
        <h1>Summary of Awarded Tenders</h1>
      </div>

      <div className="tender-content">

        <table className="tender-table">
          <thead>
            <tr>
              <th>Month / Quarter</th>
              <th>e-Tender Report</th>
            </tr>
          </thead>

          <tbody>
            {tenders.map((tender, index) => (
              <tr key={index}>
                <td>{tender.month}</td>
                <td>
                  <a href="#" className="report-link">
                    {tender.report}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Summary;