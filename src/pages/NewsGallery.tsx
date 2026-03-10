import "./NewsGallery.css";

import one from "../assets/News_Main/one.jpg";
import two from "../assets/News_Main/two.jpg";
import three from "../assets/News_Main/three.jpg";
import four from "../assets/News_Main/four.jpg";
import five from "../assets/News_Main/five.jpg";
import six from "../assets/News_Main/six.jpeg";
import seven from "../assets/News_Main/seven.jpeg";

const NewsGallery = () => {
  return (
    <div className="news-page">

      {/* ACTION BAR */}
      <div className="news-actions">

        <div className="news-actions-left">
          <a href="#">📑 Bookmark</a>
          <a href="#">✉ Mail this page</a>
          <a href="#">🖨 Print this page</a>
        </div>

        <div className="quick-links">
          <span>QUICK LINKS</span>
          <select>
            <option>Select</option>
            <option>Projects</option>
            <option>RTI</option>
            <option>Contact</option>
          </select>
        </div>

      </div>

      {/* BLUE BANNER */}
      <div className="news-banner">
        News & Announcements
      </div>

      <div className="news-container">

        {/* LINKS */}
        <div className="news-links">

          <a href="#">RLDA’s high rise residential tower in Bengaluru</a>

          <a href="#">
            Land Development Hand Book (LDHB) Part-I (General Conditions for Bids)
          </a>

          <a href="#">Expanding Horizon's of RLDA</a>

          <a href="#">RLDA's Colonies</a>

          <a href="#">RLDA's Upcoming Stations</a>

          <a href="#">Glimpses of RLDA Annual Day Function</a>

          <a href="#">RLDA Souvenir 2025 “Sampada”</a>

          <a href="#">Women’s Day Celebration-2025</a>

        </div>

        {/* IMAGE SECTION */}

        <div className="image-card">
          <img src={one} />
        </div>

        <div className="image-card">
          <img src={two} />
        </div>

        <div className="image-card">
          <img src={three} />
        </div>

        <div className="image-card">
          <img src={four} />
        </div>

        <div className="image-card">
          <img src={five} />
        </div>

        <p className="caption">
          Pre-Bid Meeting in connection with redevelopment of New Delhi Railway Station held on 15.10.2024
        </p>

        <div className="image-card">
          <img src={six} />
        </div>

        <div className="image-card">
          <img src={seven} />
        </div>

      </div>

    </div>
  );
};

export default NewsGallery;