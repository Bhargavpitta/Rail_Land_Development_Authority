import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

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
        href: "/station-redevelopment",
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
    main: "/tenders/all",
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
    main: "/news/newsletter",
    children: [
      { label: "Newsletters", href: "/news/newsletter" },
      { label: "FAQ", href: "/news/faq" }
    ]
  },

  {
    label: "CAREER",
    main: "/career/reimbursement",
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

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMenus = () => {
    setOpenDropdown(null);
    setOpenSubMenu(null);
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);

  }, []);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 w-full bg-nav shadow-lg">

      <div className="flex items-center justify-between px-4">

        <button
          className="lg:hidden p-2 text-nav-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <ul className="hidden lg:flex items-center w-full">

          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => {
                if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                setOpenDropdown(idx);
              }}
              onMouseLeave={() => {
                hoverTimeout.current = setTimeout(() => {
                  setOpenDropdown(null);
                  setOpenSubMenu(null);
                }, 200);
              }}
            >

              <Link
                to={item.main || "/"}
                onClick={closeMenus}
                className="flex items-center gap-1 px-4 py-3 text-sm font-semibold text-nav-foreground uppercase hover:bg-nav-hover"
              >
                {item.label}
                {item.children && <ChevronDown className="w-3 h-3" />}
              </Link>

              {item.children && openDropdown === idx && (
                <ul className="absolute left-0 top-full min-w-[260px] bg-white border shadow-lg">

                  {item.children.map((child, cidx) => (
                    <li
                      key={cidx}
                      className="relative"
                      onMouseEnter={() => setOpenSubMenu(cidx)}
                      onMouseLeave={() => setOpenSubMenu(null)}
                    >

                      <Link
                        to={child.href}
                        onClick={closeMenus}
                        className="flex items-center justify-between px-4 py-2 text-sm hover:bg-blue-500 hover:text-white"
                      >
                        {child.label}
                        {child.subChildren && <ChevronRight className="w-3 h-3" />}
                      </Link>

                      {child.subChildren && openSubMenu === cidx && (
                        <ul className="absolute left-full top-0 min-w-[260px] bg-white border shadow-lg">

                          {child.subChildren.map((sub, sidx) => (
                            <li key={sidx}>
                              <Link
                                to={sub.href}
                                onClick={closeMenus}
                                className="block px-4 py-2 text-sm hover:bg-blue-500 hover:text-white"
                              >
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