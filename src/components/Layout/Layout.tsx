import { Outlet, useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import PageActions from "../PageActions/PageActions";
import QuickLinks from "../QuickLinks/QuickLinks";


import "./Layout.css";

const Layout = () => {

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Header />
      <Navbar />

      {/* HOME PAGE */}
      {isHome && (
        <>
          <Outlet />
        </>
      )}

      {/* OTHER PAGES */}
      {!isHome && (
        <>
          <Breadcrumb />

          <main className="page-layout">

            <div className="page-topbar">
              <PageActions />
              <QuickLinks />
            </div>

            <div className="page-content">
              <Outlet />
            </div>

          </main>
        </>
      )}

      <Footer />
    </>
  );
};

export default Layout;