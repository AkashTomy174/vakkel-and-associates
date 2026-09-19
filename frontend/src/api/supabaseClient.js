import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
// Build the client only when both values are present. Constructing it with
// `undefined` throws at import time, which would white-screen the entire app
// (this module is pulled in by a routed page). Missing config should disable
// the booking/join submissions, not the whole site.
let supabase = null
if (url && key) {
  supabase = createClient(url, key)
} else if (import.meta.env.DEV) {
  console.warn(
    '[supabase] VITE_SUPABASE_URL / VITE_SUPABASE_PUBLISHABLE_KEY are not set — ' +
      'form submissions are disabled. Copy .env.example to .env and restart the dev server.',
  )
}

// Throws a legible error at call time instead of crashing the app on load.
export function requireSupabase() {
  if (!supabase) {
    throw new Error(
      'Supabase is not configured. Set VITE_SUPABASE_URL and ' +
        'VITE_SUPABASE_PUBLISHABLE_KEY in the build environment.',
    )
  }
  return supabase
}

export { supabase }
export default supabase
