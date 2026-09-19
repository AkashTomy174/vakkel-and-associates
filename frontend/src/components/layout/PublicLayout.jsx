import { Outlet } from "react-router-dom";
import SiteNav from "./SiteNav.jsx";
import SiteFooter from "./SiteFooter.jsx";
import ConsultationModal from "./ConsultationModal.jsx";
import SplashScreen from "../SplashScreen/SplashScreen.jsx";
import { ConsultationProvider } from "./ConsultationContext.jsx";
import "../../glass-nav-flow.css";

// Shared shell for every public page: one navbar, one footer, and one booking
// modal instance shared through ConsultationContext.
function PublicLayout() {
  return (
    <ConsultationProvider>
      {/* Sits in the stable layout shell (not in App's route tree), so it is
          created once and never re-created when the visitor navigates —
          clicking "Home" in the navbar must not replay it. SplashScreen
          itself decides whether to show, once per page load. */}
      <SplashScreen />
      <div className="glass-site public-layout">
        <SiteNav />
        <main className="public-main">
          <Outlet />
        </main>
        <SiteFooter />
        <ConsultationModal />
      </div>
    </ConsultationProvider>
  );
}

export default PublicLayout;
