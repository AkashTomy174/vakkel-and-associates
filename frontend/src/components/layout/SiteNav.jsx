import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ClientContactActions from "../ClientContactActions/ClientContactActions.jsx";
import { useConsultation } from "./ConsultationContext.jsx";

// The homepage section anchors used by the global nav. When a visitor is on a
// different public page, these links must first navigate to "/" and then scroll
// to the target section instead of leaving a broken local "#about" anchor.
// (The scroll itself is handled globally by ScrollToTop.)
const ANCHOR_LINKS = [
  { label: "About", hash: "about" },
  { label: "Practice Areas", hash: "practice" },
];

function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openConsultation } = useConsultation();
  const { pathname } = useLocation();

  const closeMenu = () => setMenuOpen(false);

  // Safety net: if the menu is open when the route changes (e.g. a link inside
  // it, or the browser Back button), close it. Uses no history of its own, so
  // it cannot interfere with Back navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // --- Scroll preservation -------------------------------------------------
  //
  // Root cause of the previous reset: the restore ran in the lock effect's
  // CLEANUP. React runs cleanup before the next render is committed, so at that
  // moment <html> still had `overflow: hidden` from the open state and the
  // scroll assignment was silently discarded — the page stayed at 0.
  //
  // The fix is ordering, not a delay: the offset is captured before the lock is
  // applied, and restored from a separate effect that runs only once the closed
  // state has committed AND the lock has been released. `html` is also given
  // `scroll-behavior: auto` for the duration of the restore so the page's global
  // `scroll-behavior: smooth` cannot turn it into an animation.
  const savedScrollY = useRef(0);
  const restoreOnClose = useRef(false);

  function toggleMenu() {
    setMenuOpen((current) => {
      if (!current) {
        // Read the offset here, before React re-renders and clips the page.
        // Once `overflow: hidden` is applied, `window.scrollY` reports 0.
        savedScrollY.current = window.scrollY;
        restoreOnClose.current = true;
      }
      return !current;
    });
  }

  // Lock the page while the menu is open, and let Escape close it. The menu
  // itself still scrolls (its own `overflow-y: auto`) so a long list on a short
  // screen stays reachable.
  //
  // `overflow: hidden` on <html>/<body>, NOT `position: fixed` on <body>: the
  // mobile navbar is `position: relative` (so the menu can sit in flow and push
  // the announcement strip down), and a fixed-body lock would translate the
  // navbar off-screen with the body, making the menu unreachable.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const root = document.documentElement;
    const previousRootOverflow = root.style.overflow;
    const previousRootOverscroll = root.style.overscrollBehavior;
    const previousBodyOverflow = document.body.style.overflow;

    // `overscroll-behavior: none` blocks scroll chaining / iOS rubber-banding
    // on the frozen page.
    root.style.overflow = "hidden";
    root.style.overscrollBehavior = "none";
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      root.style.overflow = previousRootOverflow;
      root.style.overscrollBehavior = previousRootOverscroll;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [menuOpen]);

  // Restore the offset only after the closed state has fully committed and the
  // lock above has been released. Runs on the close transition only, so a real
  // route navigation is never affected.
  useLayoutEffect(() => {
    if (menuOpen || !restoreOnClose.current) return;
    restoreOnClose.current = false;

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    // Suppress `scroll-behavior: smooth` for this one jump so the restore is
    // instant and deterministic rather than an animation that can be
    // interrupted.
    root.style.scrollBehavior = "auto";
    window.scrollTo({ top: savedScrollY.current, left: 0, behavior: "auto" });
    root.style.scrollBehavior = previousScrollBehavior;
  }, [menuOpen]);

  return (
    <header className="glass-header">
      <nav className="glass-nav">
        <Link className="va-logo" to="/" onClick={closeMenu}>
          <span>VA</span>
          <strong>
            VAKKEEL <small>& ASSOCIATES</small>
          </strong>
        </Link>
        <div
          id="glass-mobile-menu"
          className={menuOpen ? "glass-nav-links open" : "glass-nav-links"}
        >
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          {ANCHOR_LINKS.map((link) => (
            <Link key={link.hash} to={`/#${link.hash}`} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <Link to="/government-approvals-compliance" onClick={closeMenu}>
            Government Approvals &amp; Compliance
          </Link>
          <Link to="/insights" onClick={closeMenu}>
            Insights
          </Link>
          <Link to="/join" onClick={closeMenu}>
            Join as Associate
          </Link>
        </div>
        <button
          className="gold-glass-button"
          type="button"
          onClick={openConsultation}
        >
          Book a consultation <span>↗</span>
        </button>
        <button
          className="glass-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="glass-mobile-menu"
          type="button"
          onClick={toggleMenu}
        >
          <span />
          <span />
        </button>
      </nav>
      <div className="glass-announcement">
        <span className="glass-pulse" />
        <span className="glass-announcement-primary">
          AVAILABLE 24/7 — EMERGENCY LEGAL RESPONSE UNDER 45 MINUTES
        </span>
        <span className="glass-announcement-sep">·</span>
        <span className="glass-announcement-secondary">
          NRI GLOBAL DESK ACTIVE
        </span>
        <span className="glass-announcement-sep">·</span>
        <button
          type="button"
          className="glass-announcement-cta"
          onClick={openConsultation}
        >
          Book now ↗
        </button>
      </div>
      <ClientContactActions />
    </header>
  );
}

export default SiteNav;
