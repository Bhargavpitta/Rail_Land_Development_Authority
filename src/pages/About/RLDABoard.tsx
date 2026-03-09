import "./RLDABoard.css";

import chairman from "../../assets/board/vivek_gupta.jpeg";
import viceChairman from "../../assets/board/Manoj_garg.jpeg";
import member1 from "../../assets/board/t_k_goyal.jpeg";
import member2 from "../../assets/board/Rabindra_mishra.jpeg";
import member3 from "../../assets/board/mudit_chandra.jpeg";
import member4 from "../../assets/board/anand_singh.png";

const members = [
  {
    img: member1,
    name: "Sh. T. K. Goyal",
    role: "(Member/Planning)",
  },
  {
    img: member2,
    name: "Sh. Rabindra Nath Mishra",
    role: "(Member/Revenue)",
  },
  {
    img: member3,
    name: "Sh. Mudit Chandra",
    role: "(Member/B.D.)",
  },
  {
    img: member4,
    name: "Sh. Anand Singh",
    role: "(Member/Projects)",
  },
];

const RLDABoard = () => {
  return (
    <div className="board-page">

      {/* Banner */}
      <div className="board-banner">
        <h1>RLDA Board</h1>
      </div>

      <div className="board-container">

        {/* Chairman */}
        <div className="board-card chairman-card">
          <img src={chairman} alt="Chairman" />
          <h2>Sh. Vivek Kumar Gupta</h2>
          <p>(Chairman, RLDA)</p>
          <span>(Member Infrastructure)</span>
        </div>

        {/* Vice Chairman */}
        <div className="board-card vice-card">
          <img src={viceChairman} alt="Vice Chairman" />
          <h3>Sh. Manoj Garg</h3>
          <p>(Vice Chairman)</p>
        </div>

        {/* Members */}
        <div className="members-grid">
          {members.map((member, index) => (
            <div className="member-card" key={index}>
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RLDABoard;