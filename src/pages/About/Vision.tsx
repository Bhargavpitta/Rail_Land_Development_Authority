import "./Vision.css";

import vision1 from "../../assets/vision.jpg";
import vision2 from "../../assets/vision2.jpg";

const Vision = () => {
  return (
    <div className="vision-container">

      <div className="vision-card">

        <img
          src={vision1}
          alt="RLDA Vision Map 2047 Part 1"
          className="vision-image"
        />

        <img
          src={vision2}
          alt="RLDA Vision Map 2047 Part 2"
          className="vision-image"
        />

      </div>

    </div>
  );
};

export default Vision;