import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">

      <h1 className="text-2xl font-bold mb-6">Sitemap</h1>

      <div className="grid grid-cols-2 gap-10">

        {/* ABOUT */}
        <div>
          <h2 className="font-bold mb-3">About Us</h2>
          <ul className="space-y-2 text-blue-600">
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
        <div>
          <h2 className="font-bold mb-3">RTI</h2>
          <ul className="space-y-2 text-blue-600">
            <li><Link to="/rti/act">RTI Act</Link></li>
            <li><Link to="/rti/officials">RTI Officials</Link></li>
          </ul>
        </div>

        {/* PROJECTS */}
        <div>
          <h2 className="font-bold mb-3">Projects</h2>
          <ul className="space-y-2 text-blue-600">
            <li><Link to="/projects/station/status">Station Re-Development</Link></li>
            <li><Link to="/projects/commercial/status">Commercial Development</Link></li>
            <li><Link to="/projects/mfc/status">Multifunctional Complex</Link></li>
            <li><Link to="/projects/colony/status">Colony Redevelopment</Link></li>
            <li><Link to="/projects/consultant">Empanelled Consultant</Link></li>
            <li><Link to="/projects/opaas">OPAAS</Link></li>
          </ul>
        </div>

        {/* TENDERS */}
        <div>
          <h2 className="font-bold mb-3">Tenders / e-Auctions</h2>
          <ul className="space-y-2 text-blue-600">
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
        <div>
          <h2 className="font-bold mb-3">News & Announcements</h2>
          <ul className="space-y-2 text-blue-600">
            <li><Link to="/news/newsletter">RLDA E-News Letter</Link></li>
            <li><Link to="/news/faq">FAQs</Link></li>
          </ul>
        </div>

        {/* CAREER */}
        <div>
          <h2 className="font-bold mb-3">Career</h2>
          <ul className="space-y-2 text-blue-600">
            <li><Link to="/career/monthly-remuneration">Monthly Remuneration</Link></li>
            <li><Link to="/career/reimbursement">Reimbursement</Link></li>
            <li><Link to="/career/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="font-bold mb-3">Contact Us</h2>
          <ul className="space-y-2 text-blue-600">
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