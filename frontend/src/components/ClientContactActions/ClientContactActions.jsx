import './client-contact.css'

function ClientContactActions() {
  return (
    <div className="client-contact-actions" aria-label="Contact Vakkeel and Associates">
      <span className="client-contact-label" aria-hidden="true"><strong>Direct chamber</strong><small>Representative online</small></span>
      <a
        className="client-contact-call"
        href="tel:+916369717520"
        aria-label="Call the chamber at +91 63697 17520"
      >
        <span className="material-symbols-outlined" aria-hidden="true">call</span>
        <span>Call</span>
      </a>
      <a
        className="client-contact-whatsapp"
        href="https://wa.me/916369717520?text=Hello%20Vakkeel%20%26%20Associates%2C%20I%20would%20like%20to%20discuss%20a%20legal%20matter."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with the chamber on WhatsApp"
      >
        <span className="material-symbols-outlined" aria-hidden="true">chat</span>
        <span>WhatsApp</span>
      </a>
    </div>
  )
}

export default ClientContactActions