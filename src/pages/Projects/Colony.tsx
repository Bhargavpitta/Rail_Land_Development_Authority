import "./Colony.css";

const Colony = () => {
  return (
    <div className="project-page">
      <div className="project-banner">
        <h1>Colony Redevelopment</h1>
      </div>

      <div className="project-content">
        <p>
          RLDA undertakes redevelopment of old railway colonies to provide
          modern housing infrastructure and better urban planning.
        </p>

        <div className="project-card">
          <ul>
            <li>Modern housing</li>
            <li>Green spaces</li>
            <li>Smart infrastructure</li>
            <li>Improved urban planning</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Colony;