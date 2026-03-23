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

      {/* BLUE BANNER */}
     <div className="news-banner">
  <span>News & Announcements</span>
</div>

      <div className="news-container">

        <div className="news-card">

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

          {/* IMAGE GRID */}
          <div className="news-images">

            <div className="image-card">
              <img src={one} alt="news-1" />
            </div>

            <div className="image-card">
              <img src={two} alt="news-2" />
            </div>

            <div className="image-card">
              <img src={three} alt="news-3" />
            </div>

            <div className="image-card">
              <img src={four} alt="news-4" />
            </div>

            <div className="image-card">
              <img src={five} alt="news-5" />
            </div>

            <div className="image-card">
              <img src={six} alt="news-6" />
            </div>

            <div className="image-card">
              <img src={seven} alt="news-7" />
            </div>

          </div>

          {/* CAPTION */}
          <p className="caption">
            Pre-Bid Meeting in connection with redevelopment of New Delhi Railway Station held on 15.10.2024
          </p>

        </div>

      </div>

    </div>
  );
};

export default NewsGallery;