import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./i18n/i18n";

import Layout from "./components/Layout/Layout";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import AboutRLDA from "./pages/AboutRLDA";
import RTI from "./pages/RTI";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";

/* ABOUT */
import RLDABoard from "./pages/About/RLDABoard";
import Vision from "./pages/About/Vision";
import Organisation from "./pages/About/Organisation";
import Mission from "./pages/About/Mission";
import Railway from "./pages/About/Railway";
import Rules from "./pages/About/Rules";
import Annual from "./pages/About/Annual";

/* RTI */
import RTIAct from "./pages/RTI/RTI_act";
import RTIOfficial from "./pages/RTI/RTI_official";

/* PROJECTS */
import StatusSites from "./pages/Projects/StationRedevelopment/StatusSites";
import StationDesignDrawings from "./pages/Projects/StationRedevelopment/StationDesignDrawings";
import GeneralGuidelines from "./pages/Projects/StationRedevelopment/GeneralGuidelines";

import StatusCommercialSites from "./pages/Projects/CommercialDevelopment/StatusCommercialSites";
import StatusActiveMFCSites from "./pages/Projects/MultifunctionalComplex/StatusActiveMFCSites";
import StatusColonySites from "./pages/Projects/ColonyRedevelopment/StatusColonySites";

import Empanelled from "./pages/Projects/Empanelled";
import Opas from "./pages/Projects/Opas";

/* TENDERS */
import All_tenders from "./pages/Tenders/All_tenders";
import StationTender from "./pages/Tenders/Station";
import CommercialTender from "./pages/Tenders/Commercial";
import ColonyTender from "./pages/Tenders/Colony";
import MfcTender from "./pages/Tenders/Mfc";
import Summary from "./pages/Tenders/Summary";
import Current from "./pages/Tenders/Current";

/* NEWS */
import Rlda from "./pages/News/Rlda";
import Faq from "./pages/News/Faq";

/* CAREER */
import Reimbursement from "./pages/Career/Reimbursement";
import Monthly from "./pages/Career/Monthly";
import Terms from "./pages/Career/Terms";

/* CONTACT */
import Telephone from "./pages/Contact us/Telephone";
import Important from "./pages/Contact us/Important";
import Other from "./pages/Contact us/Other";
import Site from "./pages/Contact us/Site";
import Faqs from "./pages/Contact us/Faqs";
import Feedback from "./pages/Contact us/Feedback";
import Disclaimer from "./pages/Contact us/Disclaimer";
import Privacy from "./pages/Contact us/Privacy";

import Sitemap from "./pages/Sitemap/Sitemap";

import Desc from "./pages/desc";
import Cond from "./pages/cond";
import Pri from "./pages/pri";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>

          <Route element={<Layout />}>

            <Route path="/" element={<Index />} />

            <Route path="/about" element={<AboutRLDA />} />
            <Route path="/rti" element={<RTI />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* ABOUT */}
            <Route path="/about/rlda-board" element={<RLDABoard />} />
            <Route path="/about/vision-2047" element={<Vision />} />
            <Route path="/about/organisation-structure" element={<Organisation />} />
            <Route path="/about/mission" element={<Mission />} />
            <Route path="/about/railway-zones" element={<Railway />} />
            <Route path="/about/rules-regulations" element={<Rules />} />
            <Route path="/about/annual-reports" element={<Annual />} />

            {/* RTI */}
            <Route path="/rti/act" element={<RTIAct />} />
            <Route path="/rti/officials" element={<RTIOfficial />} />

            {/* PROJECTS */}
            <Route path="/projects/station/status" element={<StatusSites />} />
            <Route path="/projects/station/design-drawings" element={<StationDesignDrawings />} />
            <Route path="/projects/station/guidelines" element={<GeneralGuidelines />} />

            <Route path="/projects/commercial/status" element={<StatusCommercialSites />} />
            <Route path="/projects/mfc/status" element={<StatusActiveMFCSites />} />
            <Route path="/projects/colony/status" element={<StatusColonySites />} />

            <Route path="/projects/consultant" element={<Empanelled />} />
            <Route path="/projects/opaas" element={<Opas />} />

            {/* TENDERS */}
            <Route path="/tenders/all" element={<All_tenders />} />
            <Route path="/tenders/station" element={<StationTender />} />
            <Route path="/tenders/commercial" element={<CommercialTender />} />
            <Route path="/tenders/colony" element={<ColonyTender />} />
            <Route path="/tenders/mfc" element={<MfcTender />} />
            <Route path="/tenders/summary" element={<Summary />} />
            <Route path="/tenders/current" element={<Current />} />

            {/* NEWS */}
            <Route path="/news/newsletter" element={<Rlda />} />
            <Route path="/news/faq" element={<Faq />} />

            {/* CAREER */}
            <Route path="/career/reimbursement" element={<Reimbursement />} />
            <Route path="/career/monthly-remuneration" element={<Monthly />} />
            <Route path="/career/terms" element={<Terms />} />

            {/* CONTACT */}
            <Route path="/contact/telephone" element={<Telephone />} />
            <Route path="/contact/important-links" element={<Important />} />
            <Route path="/contact/other-sites" element={<Other />} />
            <Route path="/contact/sitemap" element={<Site />} />
            <Route path="/contact/faqs" element={<Faqs />} />
            <Route path="/contact/feedback" element={<Feedback />} />
            <Route path="/contact/disclaimer" element={<Disclaimer />} />
            <Route path="/contact/privacy" element={<Privacy />} />

            <Route path="/sitemap" element={<Sitemap />} />

            <Route path="/disclaimer" element={<Desc />} />
            <Route path="/terms" element={<Cond />} />
            <Route path="/privacy" element={<Pri />} />

          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;