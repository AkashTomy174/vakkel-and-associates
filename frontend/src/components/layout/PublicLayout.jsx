import { Outlet } from "react-router-dom";
import SiteNav from "./SiteNav.jsx";
import SiteFooter from "./SiteFooter.jsx";
import ConsultationModal from "./ConsultationModal.jsx";
import { ConsultationProvider } from "./ConsultationContext.jsx";
import "../../glass-nav-flow.css";

// Shared shell for every public page: one navbar, one footer, and one booking
// modal instance shared through ConsultationContext.
function PublicLayout() {
  return (
    <ConsultationProvider>
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
