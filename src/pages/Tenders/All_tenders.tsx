import "./All_tenders.css";

const All_tenders = () => {
  return (
    <div className="tender-page">
      <div className="tender-banner">
        <h1>All Tenders / e-Auctions (Active)</h1>
      </div>

      <div className="tender-content">
        <p>
          This section provides information about all active tenders and
          e-auctions issued by RLDA for development of railway land and
          infrastructure.
        </p>

        <div className="tender-card">
          <h3>Available Tender Categories</h3>
          <ul>
            <li>Station Redevelopment</li>
            <li>Commercial Development</li>
            <li>Colony Redevelopment</li>
            <li>Multifunctional Complex</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default All_tenders;