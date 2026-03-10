import "./Current.css";

import one from "../../assets/Tenders_Current/one.jpeg";
import two from "../../assets/Tenders_Current/two.jpeg";
import three from "../../assets/Tenders_Current/three.jpeg";
import four from "../../assets/Tenders_Current/four.jpg";
import five from "../../assets/Tenders_Current/five.jpeg";
import six from "../../assets/Tenders_Current/six.jpg";
import seven from "../../assets/Tenders_Current/seven.jpg";
import eight from "../../assets/Tenders_Current/eight.jpg";
import nine from "../../assets/Tenders_Current/nine.jpg";

const Current = () => {

  const tenders = [
    { img: one },
    { img: two },
    { img: three },
    { img: four },
    { img: five },
    { img: six },
    { img: seven },
    { img: eight },
    { img: nine },
  ];

  return (
    <div className="tender-page">

      <div className="tender-banner">
        <h1>Current Bid Opportunities</h1>
      </div>

      <div className="tender-content">
        <p>
          Rail Land Development Authority invites bids for various railway land
          development projects. The following bid opportunities are currently active.
        </p>

        <div className="tender-grid">
          {tenders.map((tender, index) => (
            <div className="tender-card" key={index}>
              <img src={tender.img} alt={`Tender ${index + 1}`} />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default Current;