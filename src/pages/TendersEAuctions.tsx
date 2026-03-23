import { useEffect, useState } from "react";
import "./tenders.css";

interface Tender {
  notice: string;
  description: string;
  lastDate: string;
  openDate: string;
  link: string;
}

const TendersEAuctions = () => {

  const [tenders, setTenders] = useState<Tender[]>([]);

  useEffect(() => {
    fetch("/data/tenders.json")
      .then(res => res.json())
      .then(data => setTenders(data));
  }, []);

  return (
    <div className="tender-page">

      <h2 className="tender-title">Tenders/e-Auctions</h2>

      <p className="tender-info">
        Participant Bidders can view Technical/Financial Score (QCBS),
        Qualification/Disqualification of bids on the tender wizard portal,
        for any query please contact Sh. Neeraj Kumar Gupta
        JGM /Expert/Tender at 9711305031
      </p>

      <a className="tender-participation" href="#">
        Participation Link for e-Tender (RLDA e-Tenders)
      </a>

      <table className="tender-table">

        <thead>
          <tr>
            <th>Tender/RFP/RFE/Quotation/e-Auction Corrigendum Notice No.</th>
            <th>Description</th>
            <th>Last Date of Submission</th>
            <th>Date of Opening</th>
            <th>Detailed View</th>
          </tr>
        </thead>

        <tbody>

          {tenders.map((tender, i) => (

            <tr key={i}>

              <td className="notice">
                {tender.notice.split("\n").map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </td>

              <td className="description">
                {tender.description}
              </td>

              <td>{tender.lastDate}</td>

              <td>{tender.openDate}</td>

              <td>
                <a
                  href={tender.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-link"
                >
                  Click Here
                </a>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <h3 className="others-title">Others</h3>

      <div className="others-links">

        <a href="#">Innovative design of ramp for Indian Railways</a>

        <a href="#">
          Clarification in Standard Request for Proposal (RFP)
          document for development/Redevelopment of Railway Stations
        </a>

        <a href="#">RFP Document for Station Development</a>

        <a href="#">EPC Document for Station Development</a>

        <a href="#">Letter dt.22.11.2021 for Station Development</a>

        <a href="#">
          Indian Railway General condition of contract for services
        </a>

        <a href="#">
          Indian Railway General Condition of Contract (GCC-22)
        </a>

        <a href="#">
          Model document of RFP for appointment of technical consultant
        </a>

      </div>

    </div>
  );
};

export default TendersEAuctions;