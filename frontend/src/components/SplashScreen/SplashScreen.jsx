import { useCallback, useEffect, useRef, useState } from "react";
import "./splash-screen.css";

// Shown once per page load, on the homepage.
//
// "Per page load" (not per session) is deliberate: the client wants it on every
// fresh visit, but a visitor clicking "Home" in the navbar mid-session should
// NOT see it again. This module-level flag gives exactly that — it survives
// client-side route changes, and is reset only by a real page load (first
// entry, refresh, or a new tab). Nothing is written to storage.
//
// The overlay is pure CSS: it never gates or delays the real page — the
// homepage mounts and renders underneath, and this sits on top with
// `position: fixed` (so dismissing it causes zero layout shift).
let shownThisPageLoad = false;

// Auto-dismiss timing (spec: 1.2–1.8s, with a 300ms fade). Keep the fade
// duration in sync with --splash-fade in splash-screen.css.
const VISIBLE_MS = 1500;
const FADE_MS = 300;

function shouldShowOnLoad() {
  if (shownThisPageLoad) return false;
  shownThisPageLoad = true;
  return true;
}

function SplashScreen() {
  const [visible, setVisible] = useState(shouldShowOnLoad);
  const [leaving, setLeaving] = useState(false);
  const timers = useRef([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }, []);

  // Begin the fade-out, then unmount once the transition has finished.
  const dismiss = useCallback(() => {
    clearTimers();
    setLeaving(true);
    const id = window.setTimeout(() => setVisible(false), FADE_MS);
    timers.current.push(id);
  }, [clearTimers]);

  useEffect(() => {
    if (!visible) return undefined;

    // Auto-dismiss.
    timers.current.push(window.setTimeout(dismiss, VISIBLE_MS));

    // Skip on Escape. Click/tap is handled on the overlay itself.
    const onKeyDown = (event) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      clearTimers();
    };
  }, [visible, dismiss, clearTimers]);

  if (!visible) return null;

  return (
    <div
      className={`splash-screen${leaving ? " is-leaving" : ""}`}
      role="presentation"
      onClick={dismiss}
      // Screen readers should go straight to the real page content.
      aria-hidden="true"
    >
      <div className="splash-inner">
        <div className="splash-mark">VA</div>
        <p className="splash-name">Vakkeel &amp; Associates</p>
        <p className="splash-tagline">AI based Legal tech platform Startup</p>
        <div className="splash-loader" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
      <p className="splash-skip">tap to skip</p>
    </div>
  );
}

export default SplashScreen;
