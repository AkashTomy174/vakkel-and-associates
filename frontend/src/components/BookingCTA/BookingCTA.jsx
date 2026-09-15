import { useState } from 'react'
import supabase from '../../api/supabaseClient'

const INITIAL = { name: '', email: '', phone: '', whatsapp: '', service: '', medium: '', message: '' }

function BookingCTA({ practices, isEmergency = false, onClose }) {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState(null)

  function set(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Full name is required.'
    if (!form.phone.trim()) next.phone = 'Phone number is required.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setServerError(null)
    const { error } = await supabase.from('bookings').insert({
      name: form.name.trim(),
      email: form.email.trim() || null,
      phone: form.phone.trim(),
      whatsapp: form.whatsapp.trim() || null,
      service: form.service || null,
      medium: form.medium || null,
      message: form.message.trim() || null,
      is_emergency: isEmergency,
      created_at: new Date().toISOString(),
    })
    setLoading(false)
    if (error) {
      setServerError('Something went wrong. Please try again or call the firm directly.')
      return
    }
    setSubmitted(true)
    setForm(INITIAL)
  }

  if (submitted) {
    return (
      <div className="modal-success">
        <span>✓</span>
        <h2>Your request is with us.</h2>
        <p>Our chamber will respond within 45 minutes.</p>
        <button className="gold-glass-button" type="button" onClick={onClose}>Close</button>
      </div>
    )
  }

  return (
    <>
      <span className="section-kicker">{isEmergency ? 'EMERGENCY INTAKE' : 'PRIVATE CHAMBER INTAKE'}</span>
      <h2>Begin with a<br /><em>conversation.</em></h2>
      <p>Tell us a little about your matter and our chamber will be in touch.</p>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          Full name
          <input
            required
            placeholder="Your name"
            value={form.name}
            onChange={set('name')}
            aria-invalid={!!errors.name}
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </label>
        <label>
          Email address
          <input
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={set('email')}
          />
        </label>
        <label>
          Phone number
          <input
            required
            type="tel"
            inputMode="tel"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={set('phone')}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </label>
        <label>
          WhatsApp number
          <input
            type="tel"
            inputMode="tel"
            placeholder="+91 98765 43210"
            value={form.whatsapp}
            onChange={set('whatsapp')}
          />
        </label>
        <label>
          What can we help with?
          <select value={form.service} onChange={set('service')}>
            <option value="" disabled>Select a practice area</option>
            {practices.map((p) => <option key={p.title}>{p.title}</option>)}
            <option>Other / none of the above</option>
          </select>
        </label>
        <label>
          How would you like to consult?
          <select value={form.medium} onChange={set('medium')}>
            <option value="">How would you like to consult?</option>
            <option value="video-call">Video Call</option>
            <option value="audio-call">Audio Call</option>
            <option value="in-person">In-Person Meeting</option>
          </select>
        </label>
        <label>
          Brief description
          <textarea
            rows="3"
            placeholder="A short outline of your matter"
            value={form.message}
            onChange={set('message')}
          />
        </label>
        {serverError && <p className="form-server-error">{serverError}</p>}
        <button className="gold-glass-button" type="submit" disabled={loading}>
          {loading ? 'Submitting…' : 'Request consultation'} <span>↗</span>
        </button>
      </form>
      <small className="privacy-note">Your details are handled in confidence and used only to respond to this request.</small>
    </>
  )
}

export default BookingCTA
