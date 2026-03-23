import "./Empanelled.css";

const Empanelled = () => {
  return (
    <div className="emp-page">
      <div className="emp-banner">
        <h1>Empanelled Consultant</h1>
      </div>

      <div className="emp-content">

        <a
          href="/pdfs/Empanelled/emp_one.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="emp-link"
        >
          List of Architectural Firms empanelled for Providing Architectural
          Consultancy for re-development of Railway Stations
          (Revision No. 9 dt. 22.05.2023)
        </a>

        <a
          href="/pdfs/Empanelled/emp_two.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="emp-link"
        >
          List of Empanelment of Financial & Marketing Consultants for various
          Sites/Railway Colonies of Indian Railways located PAN India dated
          23-09-2022 (Panel-1 for Sites valuing more than Rs. 300 crore)
        </a>

        <a
          href="/pdfs/Empanelled/emp_three.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="emp-link"
        >
          List of Empanelment of Financial & Marketing Consultants for various
          Sites/Railway Colonies of Indian Railways located PAN India dated
          18-11-2022 (Panel-2 for Sites valuing Rs. 50 Crore Upto Rs. 300 crore)
        </a>

        <a
          href="/pdfs/Empanelled/emp_four.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="emp-link"
        >
          Empanelment of Advocates & Law Firms in RLDA
        </a>

      </div>
    </div>
  );
};

export default Empanelled;