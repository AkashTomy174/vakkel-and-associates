﻿import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import GlassLandingPage from "./GlassLandingPage.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import PublicLayout from "./components/layout/PublicLayout.jsx";

// Route-level code splitting keeps the homepage bundle small; secondary pages
// load on demand. The homepage is imported eagerly (it is the common entry).
const Insights = lazy(() => import("./pages/Insights.jsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.jsx"));
const JoinUsPage = lazy(() => import("./pages/JoinUsPage.jsx"));
const GovernmentApprovalsPage = lazy(
  () => import("./pages/GovernmentApprovalsPage.jsx"),
);

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
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
      </Suspense>
    </>
  );
}
export default App;
