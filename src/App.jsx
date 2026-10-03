import { useState } from 'react'

const DOMAIN = 'OnlinePayment.in'
const EMAIL = 'anjitaniket@gmail.com'
const PRICE = '₹4,99,000'

const highlights = [
  {
    title: 'Exact-match keyword',
    text: 'Built around "online payment" — one of the most searched terms in fintech and e-commerce.',
    icon: '🔑',
  },
  {
    title: 'Trusted .in extension',
    text: 'The official country-code domain for India, ideal for a brand targeting the Indian market.',
    icon: '🇮🇳',
  },
  {
    title: 'Instantly memorable',
    text: 'Short, clear and easy to spell — no hyphens, no numbers, zero confusion.',
    icon: '💡',
  },
  {
    title: 'Brand-ready',
    text: 'Perfect for payment gateways, wallets, checkout tools, neobanks and billing startups.',
    icon: '🚀',
  },
]

const useCases = [
  'Payment gateway or processor',
  'Digital wallet / UPI app',
  'Online checkout & billing SaaS',
  'Fintech or neobank startup',
  'Merchant services platform',
  'Subscription & recurring payments',
]

export default function App() {
  const [copied, setCopied] = useState(false)

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Enquiry: ${DOMAIN} domain purchase`
  )}&body=${encodeURIComponent(
    `Hi,\n\nI am interested in acquiring the domain ${DOMAIN}.\n\nMy offer / questions:\n\n`
  )}`

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable — ignore */
    }
  }

  return (
    <div className="page">
      <header className="nav">
        <div className="brand">
          <span className="brand-mark">₹</span>
          <span className="brand-name">{DOMAIN}</span>
        </div>
        <a className="nav-cta" href="#enquiry">
          Make an enquiry
        </a>
      </header>

      <main>
        <section className="hero">
          <span className="badge">● This domain is for sale</span>
          <h1>
            <span className="hero-domain">{DOMAIN}</span>
          </h1>
          <p className="hero-sub">
            A premium, exact-match domain for the payments industry. Own the name
            your customers already type when they want to pay online.
          </p>

          <div className="price-card">
            <div className="price-label">Asking price</div>
            <div className="price-value">{PRICE}</div>
            <div className="price-note">Negotiable — serious offers welcome</div>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#enquiry">
              Enquire now
            </a>
            <a className="btn btn-ghost" href={mailto}>
              Email the owner
            </a>
          </div>
        </section>

        <section className="section">
          <h2>Why this domain</h2>
          <div className="grid">
            {highlights.map((h) => (
              <div className="card" key={h.title}>
                <div className="card-icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Perfect for</h2>
          <ul className="usecases">
            {useCases.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </section>

        <section className="section enquiry" id="enquiry">
          <div className="enquiry-inner">
            <h2>Interested in {DOMAIN}?</h2>
            <p>
              Send us your offer or questions. We respond to all serious enquiries
              quickly and can arrange a secure transfer via escrow.
            </p>

            <div className="enquiry-actions">
              <a className="btn btn-primary" href={mailto}>
                Send enquiry email
              </a>
              <button className="btn btn-ghost" onClick={copyEmail} type="button">
                {copied ? 'Copied ✓' : `Copy ${EMAIL}`}
              </button>
            </div>

            <p className="enquiry-email">
              Or email us directly at{' '}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {DOMAIN} — Premium domain for sale.</p>
        <p className="footer-muted">
          This page exists solely to facilitate the sale of this domain name.
        </p>
      </footer>
    </div>
  )
}
