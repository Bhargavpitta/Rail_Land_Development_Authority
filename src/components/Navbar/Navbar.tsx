import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';

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
  children?: NavChild[];
}

const Navbar = () => {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    {
      label: t('nav.about_us'),
      children: [
        { label: t('about_us.board'), href: '#' },
        { label: t('about_us.vision'), href: '#' },
        { label: t('about_us.org_structure'), href: '#' },
        { label: t('about_us.mission'), href: '#' },
        { label: t('about_us.zones'), href: '#' },
        { label: t('about_us.rules'), href: '#' },
        { label: t('about_us.annual_reports'), href: '#' },
      ],
    },
    {
      label: t('nav.rti'),
      children: [
        { label: t('rti_menu.act'), href: '#' },
        { label: t('rti_menu.officials'), href: '#' },
      ],
    },
    {
      label: t('nav.projects'),
      children: [
        {
          label: t('projects_menu.station'), href: '#',
          subChildren: [
            { label: t('projects_menu.station_status'), href: '#' },
            { label: t('projects_menu.station_design'), href: '#' },
            { label: t('projects_menu.station_guidelines'), href: '#' },
          ],
        },
        {
          label: t('projects_menu.commercial'), href: '#',
          subChildren: [
            { label: t('projects_menu.commercial_status'), href: '#' },
          ],
        },
        {
          label: t('projects_menu.mfc'), href: '#',
          subChildren: [
            { label: t('projects_menu.mfc_status'), href: '#' },
          ],
        },
        {
          label: t('projects_menu.colony'), href: '#',
          subChildren: [
            { label: t('projects_menu.colony_status'), href: '#' },
          ],
        },
        { label: t('projects_menu.consultant'), href: '#' },
        { label: t('projects_menu.opaas'), href: '#' },
      ],
    },
    {
      label: t('nav.tenders'),
      children: [
        { label: t('tenders_menu.all'), href: '#' },
        { label: t('tenders_menu.station'), href: '#' },
        { label: t('tenders_menu.commercial'), href: '#' },
        { label: t('tenders_menu.colony'), href: '#' },
        { label: t('tenders_menu.mfc'), href: '#' },
        { label: t('tenders_menu.awarded'), href: '#' },
        { label: t('tenders_menu.bid'), href: '#' },
      ],
    },
    {
      label: t('nav.news'),
      children: [
        { label: t('news_menu.newsletter'), href: '#' },
        { label: t('news_menu.faq'), href: '#' },
      ],
    },
    {
      label: t('nav.career'),
      children: [
        { label: t('career_menu.reimbursement'), href: '#' },
        { label: t('career_menu.remuneration'), href: '#' },
        { label: t('career_menu.terms'), href: '#' },
      ],
    },
    {
      label: t('nav.contact'),
      children: [
        { label: t('contact_menu.telephone'), href: '#' },
        { label: t('contact_menu.links'), href: '#' },
        { label: t('contact_menu.railway_sites'), href: '#' },
        { label: t('contact_menu.sitemap'), href: '#' },
        { label: t('contact_menu.faq'), href: '#' },
        { label: t('contact_menu.feedback'), href: '#' },
        { label: t('contact_menu.disclaimer'), href: '#' },
        { label: t('contact_menu.privacy'), href: '#' },
      ],
    },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setOpenSubMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 w-full bg-nav shadow-lg">
      <div className="flex items-center justify-between px-4">
        <button
          className="lg:hidden p-2 text-nav-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center w-full">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => { setOpenDropdown(idx); setOpenSubMenu(null); }}
              onMouseLeave={() => { setOpenDropdown(null); setOpenSubMenu(null); }}
            >
              <button
                className="flex items-center gap-1 px-4 py-3 text-sm font-semibold text-nav-foreground uppercase tracking-wide hover:bg-nav-hover transition-colors whitespace-nowrap"
                onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                aria-expanded={openDropdown === idx}
                aria-haspopup="true"
              >
                {item.label}
                {item.children && <ChevronDown className="w-3 h-3" />}
              </button>
              {item.children && openDropdown === idx && (
                <ul className="absolute left-0 top-full min-w-[260px] bg-background border border-border shadow-xl rounded-b-md animate-slide-down z-50">
                  {item.children.map((child, cidx) => (
                    <li
                      key={cidx}
                      className="relative"
                      onMouseEnter={() => child.subChildren ? setOpenSubMenu(cidx) : setOpenSubMenu(null)}
                      onMouseLeave={() => setOpenSubMenu(null)}
                    >
                      <a
                        href={child.href}
                        className="flex items-center justify-between px-4 py-2.5 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {child.label}
                        {child.subChildren && <ChevronRight className="w-3 h-3" />}
                      </a>
                      {/* Flyout sub-menu */}
                      {child.subChildren && openSubMenu === cidx && (
                        <ul className="absolute left-full top-0 min-w-[260px] bg-background border border-border shadow-xl rounded-md z-50">
                          {child.subChildren.map((sub, sidx) => (
                            <li key={sidx}>
                              <a
                                href={sub.href}
                                className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                              >
                                {sub.label}
                              </a>
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

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-nav border-t border-nav-hover max-h-[80vh] overflow-y-auto">
          {navItems.map((item, idx) => (
            <div key={idx}>
              <button
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-nav-foreground uppercase hover:bg-nav-hover transition-colors"
                onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === idx ? 'rotate-180' : ''}`} />
                )}
              </button>
              {item.children && openDropdown === idx && (
                <div className="bg-background">
                  {item.children.map((child, cidx) => (
                    <div key={cidx}>
                      <div className="flex items-center justify-between">
                        <a
                          href={child.href}
                          className="flex-1 block px-8 py-2.5 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {child.label}
                        </a>
                        {child.subChildren && (
                          <button
                            onClick={() => setMobileSubOpen(mobileSubOpen === `${idx}-${cidx}` ? null : `${idx}-${cidx}`)}
                            className="px-3 py-2.5 text-foreground hover:bg-primary hover:text-primary-foreground"
                          >
                            <ChevronDown className={`w-3 h-3 transition-transform ${mobileSubOpen === `${idx}-${cidx}` ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>
                      {child.subChildren && mobileSubOpen === `${idx}-${cidx}` && (
                        <div className="bg-muted">
                          {child.subChildren.map((sub, sidx) => (
                            <a
                              key={sidx}
                              href={sub.href}
                              className="block px-12 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
