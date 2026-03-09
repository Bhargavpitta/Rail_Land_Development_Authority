import { useNavigate } from "react-router-dom";
import "./QuickLinks.css";

const QuickLinks = () => {
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value) {
      navigate(value);
    }
  };

  return (
    <div className="quick-links">
      <label className="quick-title">QUICK LINKS</label>

      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>Select</option>

        <option disabled>================</option>
        <option disabled>ABOUT US</option>

        <option value="/about">About RLDA</option>
        <option value="/about/rlda-board">RLDA Board</option>
        <option value="/about/vision-2047">Vision 2047</option>
        <option value="/about/mission">Mission</option>
        <option value="/about/organisation-structure">Organisation Structure</option>
        <option value="/about/railway-zones">Railway Zones / PU & Others</option>
        <option value="/about/annual-reports">Annual Reports</option>
        <option value="/about/rules-regulations">Rules & Regulations</option>

        <option disabled>================</option>
        <option disabled>RTI</option>

        <option value="/rti">RTI</option>
        <option value="/rti/act">RTI Act</option>
        <option value="/rti/officials">RTI Officials</option>

        <option disabled>================</option>
        <option disabled>PROJECTS</option>

        <option value="/projects">Projects</option>
        <option value="/projects/station/status">Station Redevelopment</option>
        <option value="/projects/commercial/status">Commercial Development</option>
        <option value="/projects/mfc/status">Multifunctional Complex</option>
        <option value="/projects/colony/status">Colony Redevelopment</option>
        <option value="/projects/consultant">Empanelled Consultant</option>
        <option value="/projects/opaas">OPAAS</option>

        <option disabled>================</option>
        <option disabled>TENDERS</option>

        <option value="/tenders/all">All Tenders</option>
        <option value="/tenders/station">Station Tenders</option>
        <option value="/tenders/commercial">Commercial Tenders</option>
        <option value="/tenders/colony">Colony Tenders</option>
        <option value="/tenders/mfc">MFC Tenders</option>
        <option value="/tenders/summary">Awarded Tenders</option>
        <option value="/tenders/current">Current Bids</option>

        <option disabled>================</option>
        <option disabled>NEWS</option>

        <option value="/news/newsletter">News & Announcements</option>
        <option value="/news/faq">FAQ</option>

        <option disabled>================</option>
        <option disabled>CAREER</option>

        <option value="/career/reimbursement">Reimbursement</option>
        <option value="/career/monthly-remuneration">Monthly Remuneration</option>
        <option value="/career/terms">Terms & Conditions</option>

        <option disabled>================</option>
        <option disabled>CONTACT</option>

        <option value="/contact">Contact Us</option>
        <option value="/contact/telephone">Telephone Directory</option>
        <option value="/contact/important-links">Important Links</option>
        <option value="/contact/other-sites">Other Railway Sites</option>
        <option value="/contact/sitemap">Sitemap</option>
        <option value="/contact/faqs">FAQ</option>
        <option value="/contact/feedback">Feedback</option>
        <option value="/contact/disclaimer">Disclaimer</option>
        <option value="/contact/privacy">Privacy Policy</option>

        <option disabled>================</option>

        <option value="/sitemap">Site Map</option>
        <option value="/privacy">Privacy Policy</option>
        <option value="/terms">Terms & Conditions</option>
        <option value="/disclaimer">Disclaimer</option>
      </select>
    </div>
  );
};

export default QuickLinks;