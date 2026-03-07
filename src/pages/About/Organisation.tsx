import "./Organisation.css";

import anand from "../../assets/board/anand_singh.png";
import manoj from "../../assets/board/Manoj_garg.jpeg";
import mudit from "../../assets/board/mudit_chandra.jpeg";
import rabindra from "../../assets/board/Rabindra_mishra.jpeg";
import tk from "../../assets/board/t_k_goyal.jpeg";
import vivek from "../../assets/board/vivek_gupta.jpeg";

const Organisation = () => {
  const members = [
    { name: "Anand Singh", img: anand },
    { name: "Manoj Garg", img: manoj },
    { name: "Mudit Chandra", img: mudit },
    { name: "Rabindra Mishra", img: rabindra },
    { name: "T K Goyal", img: tk },
    { name: "Vivek Gupta", img: vivek },
  ];

  return (
    <div className="organisation-container">
      <h1 className="organisation-title">Organisation Structure</h1>

      <div className="board-grid">
        {members.map((member, index) => (
          <div key={index} className="board-card">
            <img src={member.img} alt={member.name} />
            <p>{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organisation;