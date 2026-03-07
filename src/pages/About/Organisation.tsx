import "./Organisation.css";
import orgChart from "../../assets/org.jpg";

const Organisation = () => {
  return (
    <div className="organisation-container">

      <h1 className="organisation-title">
        Organisation Structure
      </h1>

      <div className="organisation-chart">

        <img
          src={orgChart}
          alt="Organisation Structure RLDA"
        />

      </div>

    </div>
  );
};

export default Organisation;