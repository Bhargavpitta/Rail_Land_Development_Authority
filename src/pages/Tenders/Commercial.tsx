import "./Commercial.css";

const Commercial = () => {

  const tenders = [
    {
      notice: "RFP Notice No. RLDA/2026/RFP/CBUA/27 of 2026",
      desc: "Grant of Lease of Built up Area 2,03,665.28 Sqft (3rd–9th floor) for commercial development at Prayagraj Station Building for 45 years on revenue sharing model.",
      last: "23.04.2026 upto 15:00 Hrs",
      open: "23.04.2026 at 15:30 Hrs"
    },
    {
      notice: "Addendum No.02 dated 23.02.2026",
      desc: "Grant of Lease / License for Commercial Development of land parcel Plot-A (7521.45 sqm) near Shri Mata Vaishno Devi Katra Railway Station, Jammu for 60 years.",
      last: "27.03.2026 upto 15:00 Hrs",
      open: "27.03.2026 at 15:30 Hrs"
    },
    {
      notice: "RFP No. RLDA/RFP/CD-18 of 2026",
      desc: "Grant of Lease for Commercial Development of Railway Land Parcel (0.63 Acre) near Chittoor Railway Station adjacent to NH-69 for 60 years.",
      last: "03.03.2026 upto 15:00 Hrs",
      open: "03.03.2026 at 15:30 Hrs"
    },
    {
      notice: "RFP Notice No. RLDA/2026/RFP/CD/09 of 2026",
      desc: "Grant of Lease for Commercial Development of approx. 9385.50 sqm railway land at Pocket-C, Vibhuti Khand, Gomti Nagar, Lucknow for 60 years.",
      last: "10.03.2026 upto 15:00 Hrs",
      open: "10.03.2026 at 15:30 Hrs"
    },
    {
      notice: "RFP No. RLDA/RFP/CRD-07 of 2026",
      desc: "Grant of Lease of 15,800 sqm railway land for commercial development at New Loco Colony Faizabad and redevelopment of railway quarters at Chaliswan Colony.",
      last: "25.03.2026 upto 15:00 Hrs",
      open: "25.03.2026 at 15:30 Hrs"
    },
    {
      notice: "RFP Notice No. RLDA/2026/RFP/CD-SRD/06 of 2026",
      desc: "Grant of Lease / License for commercial development of 12,688 sqm railway land near Puducherry Railway Station in Tiruchirappalli division for 60 years.",
      last: "11.03.2026 upto 15:00 Hrs",
      open: "11.03.2026 at 15:30 Hrs"
    }
  ];

  return (
    <div className="tender-page">

      <div className="tender-banner">
        <h1>Commercial Development (Active Tenders)</h1>
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
                <td>{tender.last}</td>
                <td>{tender.open}</td>
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

export default Commercial;