import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// On route change:
//  - with a hash (e.g. "/#practice", "/join#why-join"), scroll to that section;
//  - when leaving/returning to a practice detail, restore the previous offset
//    (so closing it puts you back where you were, not at the page top);
//  - otherwise reset to the top.
//
// Keyed on `pathname` only (not `hash`) for the scroll-to-top branch, so moving
// between same-page anchors does not yank the viewport back to the top. The
// hash branch is what makes section links work from ANY page, and it replaces
// the homepage-only handler that previously lived in SiteNav.
const PRACTICE_PATH = /^\/practice\//;

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  // Where the visitor was before opening a practice detail, and the path they
  // came from, so we can restore the offset instead of jumping to the top.
  const savedScroll = useRef(0);
  const previousPath = useRef(pathname);

  useEffect(() => {
    const goingToPractice = PRACTICE_PATH.test(pathname);
    const leavingPractice =
      !goingToPractice && PRACTICE_PATH.test(previousPath.current);
    previousPath.current = pathname;

    if (goingToPractice) {
      // Remember the underlying page offset, then leave the viewport alone: the
      // detail renders over the page and must not scroll it to the top.
      savedScroll.current = window.scrollY;
      return undefined;
    }

    if (leavingPractice) {
      // Restore the underlying page offset once the route has rendered.
      const restore = savedScroll.current;
      const timer = window.setTimeout(() => {
        window.scrollTo({ top: restore, left: 0, behavior: "auto" });
      }, 0);
      return () => window.clearTimeout(timer);
    }

    if (hash) {
      const id = hash.slice(1);
      // Cross-page targets (e.g. "/join#why-join") are lazy-loaded, so the
      // element may not exist on the first tick. Poll briefly for it, then
      // scroll; if it never appears, leave the visitor at the top.
      let attempts = 0;
      let timer = 0;
      const tryScroll = () => {
        const target = document.getElementById(id);
        if (target) {
          // Respect the visitor's motion preference.
          const reduce = window.matchMedia?.(
            "(prefers-reduced-motion: reduce)",
          )?.matches;
          target.scrollIntoView({
            behavior: reduce ? "auto" : "smooth",
            block: "start",
          });
          return;
        }
        if (attempts < 20) {
          attempts += 1;
          timer = window.setTimeout(tryScroll, 50);
        }
      };
      timer = window.setTimeout(tryScroll, 0);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return undefined;
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
