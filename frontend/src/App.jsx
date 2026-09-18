﻿import { Route, Routes } from "react-router-dom";
import "./App.css";
import GlassLandingPage from "./GlassLandingPage.jsx";
import Insights from "./pages/Insights.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import JoinUsPage from "./pages/JoinUsPage.jsx";
import GovernmentApprovalsPage from "./pages/GovernmentApprovalsPage.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import PublicLayout from "./components/layout/PublicLayout.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<GlassLandingPage />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<BlogPost />} />
          <Route path="/join" element={<JoinUsPage />} />
          <Route
            path="/government-approvals-compliance"
            element={<GovernmentApprovalsPage />}
          />
          <Route path="*" element={<GlassLandingPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
