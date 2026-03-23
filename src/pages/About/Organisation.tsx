import "./Organisation.css";
import orgChart from "../../assets/org.jpg";

const Organisation = () => {
  return (
    <div className="organisation-page">

      <div className="organisation-banner">
        <h1>Organisation Structure</h1>
      </div>

      <div className="organisation-container">

        <div className="organisation-card">
          <img
            src={orgChart}
            alt="Organisation Structure RLDA"
            className="organisation-image"
          />
        </div>

      </div>

    </div>
  );
};

export default Organisation;