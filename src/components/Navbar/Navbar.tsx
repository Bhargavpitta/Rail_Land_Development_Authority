import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import "./Navbar.css";

interface SubChild {
  label: string;
  href: string;
}

interface NavChild {
  label: string;
  href: string;
  subChildren?: SubChild[];
}

interface NavItem {
  label: string;
  main?: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  {
    label: "ABOUT US",
    main: "/about",
    children: [
      { label: "RLDA Board", href: "/about/rlda-board" },
      { label: "Vision 2047", href: "/about/vision-2047" },
      { label: "Organisation Structure", href: "/about/organisation-structure" },
      { label: "Mission", href: "/about/mission" },
      { label: "Railway Zones / PU & Others", href: "/about/railway-zones" },
      { label: "Rules & Regulations", href: "/about/rules-regulations" },
      { label: "Annual Reports", href: "/about/annual-reports" }
    ]
  },
  {
    label: "RTI",
    main: "/rti",
    children: [
      { label: "RTI Act", href: "/rti/act" },
      { label: "RTI Officials", href: "/rti/officials" }
    ]
  },
  {
    label: "PROJECTS",
    main: "/projects",
    children: [
      {
        label: "Station Re-Development",
        href: "/Projects/station",
        subChildren: [
          { label: "Status of Station Development Sites", href: "/projects/station/status" },
          { label: "Station Design Drawings", href: "/projects/station/design-drawings" },
          { label: "General Guidelines", href: "/projects/station/guidelines" }
        ]
      },
      {
        label: "Commercial Development",
        href: "/projects/commercial",
        subChildren: [
          { label: "Status of Commercial Sites", href: "/projects/commercial/status" }
        ]
      },
      {
        label: "Multifunctional Complex",
        href: "/projects/mfc",
        subChildren: [
          { label: "Status of Active MFC Sites", href: "/projects/mfc/status" }
        ]
      },
      {
        label: "Colony Redevelopment",
        href: "/projects/colony",
        subChildren: [
          { label: "Status of Colony Redevelopment Sites", href: "/projects/colony/status" }
        ]
      },
      { label: "Empanelled Consultant", href: "/projects/consultant" },
      { label: "OPAAS", href: "/projects/opaas" }
    ]
  },
  {
    label: "TENDERS/E-AUCTIONS",
    main: "/tenders-eauctions",
    children: [
      { label: "All Tenders", href: "/tenders/all" },
      { label: "Station Tenders", href: "/tenders/station" },
      { label: "Commercial Tenders", href: "/tenders/commercial" },
      { label: "Colony Tenders", href: "/tenders/colony" },
      { label: "MFC Tenders", href: "/tenders/mfc" },
      { label: "Awarded Tenders", href: "/tenders/summary" },
      { label: "Current Bids", href: "/tenders/current" }
    ]
  },
  {
    label: "NEWS & ANNOUNCEMENTS",
    main: "/news-gallery",
    children: [
      { label: "Newsletters", href: "/news/newsletter" },
      { label: "FAQ", href: "/news/faq" }
    ]
  },
  {
    label: "CAREER",
    main: "/career",
    children: [
      { label: "Reimbursement", href: "/career/reimbursement" },
      { label: "Monthly Remuneration", href: "/career/monthly-remuneration" },
      { label: "Terms & Conditions", href: "/career/terms" },
      { label: "Archives", href: "/career/archives" }
    ]
  },
  {
    label: "CONTACT US",
    main: "/contact",
    children: [
      { label: "Telephone Directory", href: "/contact/telephone" },
      { label: "Important Links", href: "/contact/important-links" },
      { label: "Other Railway Sites", href: "/contact/other-sites" },
      { label: "Sitemap", href: "/contact/sitemap" },
      { label: "FAQs", href: "/contact/faqs" },
      { label: "Feedback", href: "/contact/feedback" },
      { label: "Disclaimer", href: "/contact/disclaimer" },
      { label: "Privacy Policy", href: "/contact/privacy" }
    ]
  }
];

const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openSub, setOpenSub] = useState<number | null>(null);

  return (
    <nav className="navbar">

      <div className="navbar-container">

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <ul className={`navbar-menu ${mobileOpen ? "active" : ""}`}>

          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="nav-item"
              onMouseEnter={() => setOpenDropdown(idx)}
              onMouseLeave={() => {
                setOpenDropdown(null);
                setOpenSub(null);
              }}
            >

              <Link to={item.main || "/"} className="nav-link">
                {item.label}
                {item.children && <ChevronDown size={14} />}
              </Link>

              {item.children && openDropdown === idx && (
                <ul className="dropdown">

                  {item.children.map((child, cidx) => (
                    <li
                      key={cidx}
                      className="dropdown-item"
                      onMouseEnter={() => setOpenSub(cidx)}
                      onMouseLeave={() => setOpenSub(null)}
                    >

                      <Link to={child.href} className="dropdown-link">
                        {child.label}
                        {child.subChildren && <ChevronRight size={14} />}
                      </Link>

                      {child.subChildren && openSub === cidx && (
                        <ul className="sub-dropdown">

                          {child.subChildren.map((sub, sidx) => (
                            <li key={sidx}>
                              <Link to={sub.href} className="sub-link">
                                {sub.label}
                              </Link>
                            </li>
                          ))}

                        </ul>
                      )}

                    </li>
                  ))}

                </ul>
              )}

            </li>
          ))}

        </ul>

      </div>

    </nav>
  );
};

export default Navbar;