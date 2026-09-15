import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ClientContactActions from '../ClientContactActions/ClientContactActions.jsx'
import { useConsultation } from './ConsultationContext.jsx'

// The homepage section anchors used by the global nav. When a visitor is on a
// different public page, these links must first navigate to "/" and then scroll
// to the target section instead of leaving a broken local "#about" anchor.
const ANCHOR_LINKS = [
  { label: 'About', hash: 'about' },
  { label: 'Practice Areas', hash: 'practice' },
]

function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const { openConsultation } = useConsultation()

  const closeMenu = () => setMenuOpen(false)

  // Scroll to the target section once the homepage has mounted. Runs when the
  // URL (path or hash) changes, so "/#practice" works from any page.
  useEffect(() => {
    if (!hash) return undefined
    const id = hash.replace('#', '')
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
    return () => window.clearTimeout(timer)
  }, [pathname, hash])

  return (
    <header className="glass-header">
      <nav className="glass-nav">
        <Link className="va-logo" to="/" onClick={closeMenu}>
          <span>VA</span>
          <strong>VAKKEEL <small>& ASSOCIATES</small></strong>
        </Link>
        <div className={menuOpen ? 'glass-nav-links open' : 'glass-nav-links'}>
          {ANCHOR_LINKS.map((link) => (
            <Link key={link.hash} to={`/#${link.hash}`} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
          <Link to="/insights" onClick={closeMenu}>News</Link>
        </div>
        <button className="gold-glass-button" type="button" onClick={openConsultation}>
          Book a consultation <span>↗</span>
        </button>
        <button
          className="glass-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span /><span />
        </button>
      </nav>
      <div className="glass-announcement">
        <span className="glass-pulse" />
        <span className="glass-announcement-primary">AVAILABLE 24/7 — EMERGENCY LEGAL RESPONSE UNDER 45 MINUTES</span>
        <span className="glass-announcement-sep">·</span>
        <span className="glass-announcement-secondary">NRI GLOBAL DESK ACTIVE</span>
        <span className="glass-announcement-sep">·</span>
        <button type="button" className="glass-announcement-cta" onClick={openConsultation}>Book now ↗</button>
      </div>
      <ClientContactActions />
    </header>
  )
}

export default SiteNav
