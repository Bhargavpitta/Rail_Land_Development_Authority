import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import './i18n/i18n';

//about page
import RLDABoard from "./pages/About/RLDABoard";
import Vision from "./pages/About/Vision";
import Organisation from "./pages/About/Organisation";
import Mission from "./pages/About/Mission";
import Railway from "./pages/About/Railway";
import Rules from "./pages/About/Rules";
import Annual from "./pages/About/Annual";

//rti
import RTIAct from "./pages/RTI/RTI_act";
import RTIOfficial from "./pages/RTI/RTI_official";

// Projects
import StatusSites from "./pages/Projects/StationRedevelopment/StatusSites";
import StationDesignDrawings from "./pages/Projects/StationRedevelopment/StationDesignDrawings";
import GeneralGuidelines from "./pages/Projects/StationRedevelopment/GeneralGuidelines";

import StatusCommercialSites from "./pages/Projects/CommercialDevelopment/StatusCommercialSites";
import StatusActiveMFCSites from "./pages/Projects/MultifunctionalComplex/StatusActiveMFCSites";
import StatusColonySites from "./pages/Projects/ColonyRedevelopment/StatusColonySites";

// Projects
import Empanelled from "./pages/Projects/Empanelled";
import Opas from "./pages/Projects/Opas";

// Tenders
import All_tenders from "./pages/Tenders/All_tenders";
import StationTender from "./pages/Tenders/Station";
import CommercialTender from "./pages/Tenders/Commercial";
import ColonyTender from "./pages/Tenders/Colony";
import MfcTender from "./pages/Tenders/Mfc";
import Summary from "./pages/Tenders/Summary";
import Current from "./pages/Tenders/Current";

// News
import Rlda from "./pages/News/Rlda";
import Faq from "./pages/News/Faq";

//career importss..
import Reimbursement from "./pages/Career/Reimbursement";
import Monthly from "./pages/Career/Monthly";
import Terms from "./pages/Career/Terms";

//contact us imports..
import Telephone from "./pages/Contact us/Telephone";
import Important from "./pages/Contact us/Important";
import Other from "./pages/Contact us/Other";
import Site from "./pages/Contact us/Site";
import Faqs from "./pages/Contact us/Faqs";
import Feedback from "./pages/Contact us/Feedback";
import Disclaimer from "./pages/Contact us/Disclaimer";
import Privacy from "./pages/Contact us/Privacy";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />

          {/* About Section Routes */}
    <Route path="about">
      <Route path="rlda-board" element={<RLDABoard />} />
      <Route path="vision-2047" element={<Vision />} />
      <Route path="organisation-structure" element={<Organisation />} />
      <Route path="mission" element={<Mission />} />
      <Route path="railway-zones" element={<Railway />} />
      <Route path="rules-regulations" element={<Rules />} />
      <Route path="annual-reports" element={<Annual />} />
    </Route>

<Route path="rti">
  <Route path="act" element={<RTIAct />} />
  <Route path="officials" element={<RTIOfficial />} />
</Route>

{/* PROJECTS ROUTES */}

<Route path="projects">

  {/* Station Redevelopment */}
  <Route path="station/status" element={<StatusSites />} />
  <Route path="station/design-drawings" element={<StationDesignDrawings />} />
  <Route path="station/guidelines" element={<GeneralGuidelines />} />

  {/* Commercial Development */}
  <Route path="commercial/status" element={<StatusCommercialSites />} />

  {/* Multifunctional Complex */}
  <Route path="mfc/status" element={<StatusActiveMFCSites />} />

  {/* Colony Redevelopment */}
  <Route path="colony/status" element={<StatusColonySites />} />

  {/* Consultant */}
  <Route path="consultant" element={<Empanelled />} />

  {/* OPAAS */}
  <Route path="opaas" element={<Opas />} />

</Route>



<Route path="tenders">
  <Route path="all" element={<All_tenders />} />
  <Route path="station" element={<StationTender />} />
  <Route path="commercial" element={<CommercialTender />} />
  <Route path="colony" element={<ColonyTender />} />
  <Route path="mfc" element={<MfcTender />} />
  <Route path="summary" element={<Summary />} />
  <Route path="current" element={<Current />} />
</Route>

<Route path="news">
  <Route path="newsletter" element={<Rlda />} />
  <Route path="faq" element={<Faq />} />
</Route>

<Route path="career">
  <Route path="reimbursement" element={<Reimbursement />} />
  <Route path="monthly-remuneration" element={<Monthly />} />
  <Route path="terms" element={<Terms />} />
</Route>

<Route path="contact">
  <Route path="telephone" element={<Telephone />} />
  <Route path="important-links" element={<Important />} />
  <Route path="other-sites" element={<Other />} />
  <Route path="sitemap" element={<Site />} />
  <Route path="faqs" element={<Faqs />} />
  <Route path="feedback" element={<Feedback />} />
  <Route path="disclaimer" element={<Disclaimer />} />
  <Route path="privacy" element={<Privacy />} />
</Route>



        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
