import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Reset the window scroll position to the top whenever the route changes.
// Without this, navigating from a long page (e.g. the insights list) to an
// article keeps the previous scroll offset and lands part-way down the post.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
