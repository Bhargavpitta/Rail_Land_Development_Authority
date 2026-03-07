import "./Station.css";

const Station = () => {
  return (
    <div className="project-page">
      <div className="project-banner">
        <h1>Station Re-Development</h1>
      </div>

      <div className="project-content">
        <p>
          RLDA undertakes redevelopment of railway stations to transform them
          into modern transport hubs with world-class facilities, improved
          passenger amenities and commercial utilization of railway land.
        </p>

        <div className="project-card">
          <h3>Key Features</h3>
          <ul>
            <li>Modern station buildings</li>
            <li>Integrated transport hubs</li>
            <li>Commercial development</li>
            <li>Passenger-friendly facilities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Station;