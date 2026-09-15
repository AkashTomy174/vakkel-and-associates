import { supabase } from '../../api/supabaseClient'
import { useState } from 'react'

const INITIAL = { name: '', phone: '', medium: '', message: '' }

function EmergencyBooking({ onClose }) {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    const { error } = await supabase.from('bookings').insert({
      name: form.name.trim(),
      phone: form.phone.trim(),
      medium: form.medium || null,
      message: form.message.trim() || null,
      is_emergency: true,
      created_at: new Date().toISOString(),
    })
    if (error) {
      setStatus('error')
    } else {
      setStatus('success')
      setForm(INITIAL)
    }
  }

  if (status === 'success') {
    return (
      <div className="modal-success">
        <span>✓</span>
        <h2>Request received.</h2>
        <p>We've received your request — someone will call you shortly.</p>
        {onClose && <button className="gold-glass-button" type="button" onClick={onClose}>Close</button>}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <span className="section-kicker">EMERGENCY INTAKE</span>
      <h2>Request an<br /><em>emergency callback.</em></h2>

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
        How would you like to consult?
        <select value={form.medium} onChange={set('medium')}>
          <option value="">How would you like to consult?</option>
          <option value="audio-call">Audio Call</option>
          <option value="video-call">Video Call</option>
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

      {status === 'error' && (
        <p className="form-server-error">Something went wrong. Please try again or call us directly.</p>
      )}

      <button className="gold-glass-button" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting…' : 'Request Emergency Callback'} <span>↗</span>
      </button>
    </form>
  )
}

export default EmergencyBooking
