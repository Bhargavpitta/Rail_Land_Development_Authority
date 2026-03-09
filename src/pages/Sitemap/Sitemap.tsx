import { Link } from "react-router-dom";
import "./Sitemap.css";

const Sitemap = () => {
  return (
    <div className="sitemap-container">

      <h1 className="sitemap-title">Sitemap</h1>

      <div className="sitemap-grid">

        {/* ABOUT */}
        <div className="sitemap-section">
          <h2>About Us</h2>
          <ul>
            <li><Link to="/about/rlda-board">RLDA Board</Link></li>
            <li><Link to="/about/vision-2047">Vision 2047</Link></li>
            <li><Link to="/about/organisation-structure">Organisation Structure</Link></li>
            <li><Link to="/about/mission">Mission</Link></li>
            <li><Link to="/about/railway-zones">Railway Zones</Link></li>
            <li><Link to="/about/rules-regulations">Rules & Regulations</Link></li>
            <li><Link to="/about/annual-reports">Annual Reports</Link></li>
          </ul>
        </div>

        {/* RTI */}
        <div className="sitemap-section">
          <h2>RTI</h2>
          <ul>
            <li><Link to="/rti/act">RTI Act</Link></li>
            <li><Link to="/rti/officials">RTI Officials</Link></li>
          </ul>
        </div>

        {/* PROJECTS */}
        <div className="sitemap-section">
          <h2>Projects</h2>
          <ul>
            <li><Link to="/projects/station/status">Station Re-Development</Link></li>
            <li><Link to="/projects/commercial/status">Commercial Development</Link></li>
            <li><Link to="/projects/mfc/status">Multifunctional Complex</Link></li>
            <li><Link to="/projects/colony/status">Colony Redevelopment</Link></li>
            <li><Link to="/projects/consultant">Empanelled Consultant</Link></li>
            <li><Link to="/projects/opaas">OPAAS</Link></li>
          </ul>
        </div>

        {/* TENDERS */}
        <div className="sitemap-section">
          <h2>Tenders / e-Auctions</h2>
          <ul>
            <li><Link to="/tenders/all">All Tenders</Link></li>
            <li><Link to="/tenders/station">Station Redevelopment</Link></li>
            <li><Link to="/tenders/commercial">Commercial Development</Link></li>
            <li><Link to="/tenders/colony">Colony Redevelopment</Link></li>
            <li><Link to="/tenders/mfc">MFC</Link></li>
            <li><Link to="/tenders/summary">Summary of Awarded Tenders</Link></li>
            <li><Link to="/tenders/current">Current Bid Opportunities</Link></li>
          </ul>
        </div>

        {/* NEWS */}
        <div className="sitemap-section">
          <h2>News & Announcements</h2>
          <ul>
            <li><Link to="/news/newsletter">RLDA E-News Letter</Link></li>
            <li><Link to="/news/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* CAREER */}
        <div className="sitemap-section">
          <h2>Career</h2>
          <ul>
            <li><Link to="/career/monthly-remuneration">Monthly Remuneration</Link></li>
            <li><Link to="/career/reimbursement">Reimbursement</Link></li>
            <li><Link to="/career/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="sitemap-section">
          <h2>Contact Us</h2>
          <ul>
            <li><Link to="/contact/telephone">Telephone Directory</Link></li>
            <li><Link to="/contact/important-links">Important Links</Link></li>
            <li><Link to="/contact/other-sites">Other Railway Sites</Link></li>
            <li><Link to="/contact/faqs">FAQ</Link></li>
            <li><Link to="/contact/feedback">Feedback</Link></li>
            <li><Link to="/contact/disclaimer">Disclaimer</Link></li>
            <li><Link to="/contact/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Sitemap;