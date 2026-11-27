import { useEffect, useState } from 'react'
import { business, faqs, marquee, reviewCards, themes, waLink } from '../data/business.js'
import { Counter, Icon, Reveal } from './ui.jsx'

const HELLO = 'Hi Papa Ki Rasoi Home, I saw your website and I would like to know about your tiffin service.'

/* ---------------- top banner + nav ---------------- */
export function PreviewBar() {
  return (
    <div className="preview-bar">
      Concept preview by <a href="https://factoit.com" target="_blank" rel="noopener noreferrer">FactoIT.com</a>
      . Unofficial demo, not the business&rsquo;s own website.
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-in">
        <a className="logo" href="#top">
          <span className="logo-mark">P</span>
          <span>
            Papa Ki <em>Rasoi</em>
          </span>
        </a>
        <nav className="nav-links" aria-label="Main">
          <a href="#why">Why us</a>
          <a href="#how">How it works</a>
          <a href="#order">Build tiffin</a>
          <a href="#reviews">Reviews</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="btn btn-wa btn-sm" href={waLink(HELLO)} target="_blank" rel="noopener noreferrer">
          <Icon.WhatsApp width={18} height={18} /> Order
        </a>
      </div>
    </header>
  )
}

/* ---------------- hero ---------------- */
function Thali() {
  return (
    <svg className="thali" viewBox="0 0 320 320" role="img" aria-label="Illustration of a home-style thali">
      <defs>
        <radialGradient id="plate" cx="50%" cy="42%" r="65%">
          <stop offset="0" stopColor="#fffdf7" />
          <stop offset="1" stopColor="#e9dfc6" />
        </radialGradient>
        <radialGradient id="dal" cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#ffd45c" />
          <stop offset="1" stopColor="#e89b0c" />
        </radialGradient>
        <radialGradient id="sabzi" cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#ff8a4d" />
          <stop offset="1" stopColor="#c23d12" />
        </radialGradient>
        <radialGradient id="green" cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#a5dc84" />
          <stop offset="1" stopColor="#4e9a4a" />
        </radialGradient>
        <radialGradient id="rice" cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#efe6cf" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="160" r="150" fill="#0a1a10" opacity=".35" />
      <circle cx="160" cy="160" r="146" fill="url(#plate)" />
      <circle cx="160" cy="160" r="134" fill="none" stroke="#d4c7a6" strokeWidth="2" />
      <circle cx="112" cy="118" r="44" fill="url(#dal)" />
      <circle cx="112" cy="118" r="34" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth="2" />
      <circle cx="208" cy="118" r="44" fill="url(#sabzi)" />
      <circle cx="208" cy="118" r="34" fill="none" stroke="#fff" strokeOpacity=".3" strokeWidth="2" />
      <circle cx="112" cy="208" r="44" fill="url(#green)" />
      <circle cx="208" cy="208" r="44" fill="url(#rice)" stroke="#e3d6b0" strokeWidth="2" />
      <ellipse cx="160" cy="164" rx="34" ry="30" fill="#f0b94f" />
      <ellipse cx="160" cy="164" rx="34" ry="30" fill="none" stroke="#c98a1f" strokeWidth="3" />
      <ellipse cx="152" cy="156" rx="12" ry="8" fill="#fff" opacity=".35" />
    </svg>
  )
}

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="mesh" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="pill">
            <Icon.Pin width={15} height={15} /> {business.area} &middot; {business.category}
          </span>
          <h1>
            Ghar ka khana,
            <br />
            <span className="grad">fresh to your door.</span>
          </h1>
          <div className="hindi">{business.hindi}</div>
          <p className="lead">
            Home-style, hygienic meals with a menu you can adjust to your taste. No cooking, no
            hassle, just food that tastes like home.
          </p>
          <div className="hero-cta">
            <a className="btn btn-wa btn-lg" href="#order">
              Build your tiffin <Icon.Arrow width={18} height={18} />
            </a>
            <a className="btn btn-glass btn-lg" href={waLink(HELLO)} target="_blank" rel="noopener noreferrer">
              <Icon.WhatsApp width={20} height={20} /> Chat now
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <b>
                <Counter to={business.rating} decimals={1} />
              </b>
              <span className="lbl">Google rating</span>
            </div>
            <div>
              <b>
                <Counter to={business.reviews} suffix="+" />
              </b>
              <span className="lbl">customer reviews</span>
            </div>
            <div>
              <b>9 PM</b>
              <span className="lbl">open until</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="false">
          <div className="halo" aria-hidden="true" />
          <Thali />
          <div className="float-chip c1">
            <Icon.Star width={16} height={16} /> 4.7 &middot; {business.reviews} reviews
          </div>
          <div className="float-chip c2">
            <Icon.Shield width={16} height={16} /> Hygienic packing
          </div>
          <div className="float-chip c3">
            <Icon.Truck width={16} height={16} /> Delivery &amp; pick-up
          </div>
        </div>
      </div>
    </section>
  )
}

export function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee">
        <div className="marquee-track">
          {items.map((m, i) => (
            <span key={i}>
              <Icon.Sparkle width={14} height={14} /> {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------------- why ---------------- */
export function Why() {
  return (
    <section id="why" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">Why people keep coming back</span>
          <h2>Simple food, done right.</h2>
          <p>The same things come up again and again in customer reviews.</p>
        </Reveal>

        <div className="bento">
          <Reveal className="tile tile-big" delay={0}>
            <Icon.Leaf width={30} height={30} />
            <h3>Tastes like it came from home</h3>
            <p>
              Home-cooked meals, made fresh. The reason most customers stay with a tiffin service
              for months, not days.
            </p>
            <div className="tile-badge">
              <Icon.Star width={16} height={16} /> 4.7 from {business.reviews} reviews
            </div>
          </Reveal>
          <Reveal className="tile" delay={80}>
            <Icon.Shield width={28} height={28} />
            <h3>Hygienic packing</h3>
            <p>Clean preparation and neat, secure packing for every meal.</p>
          </Reveal>
          <Reveal className="tile tile-accent" delay={140}>
            <Icon.Sliders width={28} height={28} />
            <h3>Menu you can adjust</h3>
            <p>Tell the kitchen what you like. Customers love this flexibility.</p>
          </Reveal>
          <Reveal className="tile" delay={200}>
            <Icon.Clock width={28} height={28} />
            <h3>Fresh &amp; on time</h3>
            <p>Meals that arrive fresh when you need them.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------------- how ---------------- */
export function How() {
  const steps = [
    ['Build your tiffin', 'Choose meal, taste and extras in a few taps.'],
    ['Send on WhatsApp', 'Your choices are written into the message for you.'],
    ['Enjoy at your door', 'Fresh ghar ka khana, delivered or ready for pick-up.'],
  ]
  return (
    <section id="how" className="section section-tint">
      <div className="wrap">
        <Reveal className="section-head center">
          <span className="kicker">How it works</span>
          <h2>Three taps to dinner.</h2>
        </Reveal>
        <ol className="steps">
          {steps.map(([t, d], i) => (
            <Reveal as="li" key={t} className="step" delay={i * 100}>
              <span className="step-n">{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ---------------- reviews ---------------- */
export function Reviews() {
  return (
    <section id="reviews" className="section reviews">
      <div className="mesh mesh-dark" aria-hidden="true" />
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker light">Loved by the neighbourhood</span>
          <h2>What customers say.</h2>
        </Reveal>

        <div className="rev-top">
          <Reveal className="rev-score">
            <div className="big">
              <Counter to={business.rating} decimals={1} />
            </div>
            <div className="stars" aria-label="4.7 out of 5 stars">
              {[0, 1, 2, 3, 4].map((i) => (
                <Icon.Star key={i} width={22} height={22} />
              ))}
            </div>
            <small>from {business.reviews} Google reviews</small>
          </Reveal>
          <Reveal className="chips" delay={80}>
            {themes.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </Reveal>
        </div>

        <div className="rev-cards">
          {reviewCards.map((r, i) => (
            <Reveal key={r.tag} className="rev-card" delay={i * 90}>
              <span className="rev-tag">{r.tag}</span>
              <p>{r.text}</p>
              <small>Paraphrased from public Google reviews</small>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- faq ---------------- */
export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section">
      <div className="wrap faq-grid">
        <Reveal className="section-head">
          <span className="kicker">Good to know</span>
          <h2>Questions, answered.</h2>
          <p>Anything else? Just ask on WhatsApp.</p>
          <a className="btn btn-wa" href={waLink(HELLO)} target="_blank" rel="noopener noreferrer">
            <Icon.WhatsApp width={18} height={18} /> Ask the kitchen
          </a>
        </Reveal>
        <div className="faq">
          {faqs.map((f, i) => (
            <Reveal key={f.q} className={`faq-item ${open === i ? 'open' : ''}`} delay={i * 60}>
              <button
                type="button"
                className="faq-q"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                {f.q}
                <Icon.Plus width={20} height={20} />
              </button>
              <div className="faq-a">
                <p>{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- visit ---------------- */
export function Visit() {
  return (
    <section id="visit" className="section section-tint">
      <div className="wrap visit-grid">
        <Reveal className="visit-card">
          <span className="kicker">Find us</span>
          <h2>Come say hello.</h2>
          <ul className="info">
            <li>
              <Icon.Pin />
              <div>
                <b>Address</b>
                <span>{business.address}</span>
              </div>
            </li>
            <li>
              <Icon.Clock />
              <div>
                <b>Hours</b>
                <span>{business.hours}</span>
              </div>
            </li>
            <li>
              <Icon.Phone />
              <div>
                <b>Call or WhatsApp</b>
                <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
              </div>
            </li>
            <li>
              <Icon.Truck />
              <div>
                <b>Service</b>
                <span>{business.services.join(' & ')}</span>
              </div>
            </li>
          </ul>
          <a className="btn btn-wa" href={waLink(HELLO)} target="_blank" rel="noopener noreferrer">
            <Icon.WhatsApp width={18} height={18} /> Chat on WhatsApp
          </a>
        </Reveal>
        <Reveal className="map" delay={100}>
          <iframe
            title="Map to Papa Ki Rasoi Home"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${business.lat},${business.lng}&z=17&output=embed`}
          />
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- FactoIT pitch ---------------- */
export function Pitch() {
  const perks = [
    'Menu and plans online',
    'One-tap WhatsApp ordering',
    'Found on Google',
    'Works on every phone',
    'Your own domain',
    'Hindi + English',
  ]
  return (
    <section id="pitch" className="section pitch">
      <div className="wrap">
        <Reveal className="pitch-card">
          <span className="kicker">A note from FactoIT</span>
          <h2>Imagine this as your own website.</h2>
          <p>
            Customers find you on Google, see your menu and order on WhatsApp in one tap. We built
            this preview as a free sample. We can make it yours with your real menu, photos and
            rates.
          </p>
          <ul className="perks">
            {perks.map((p) => (
              <li key={p}>
                <Icon.Check width={16} height={16} /> {p}
              </li>
            ))}
          </ul>
          <a className="btn btn-lg btn-light" href="https://factoit.com" target="_blank" rel="noopener noreferrer">
            Talk to FactoIT <Icon.Arrow width={18} height={18} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p>
          <b>{business.name}</b> &middot; {business.area}
        </p>
        <p>
          Concept preview by <a href="https://factoit.com" target="_blank" rel="noopener noreferrer">FactoIT.com</a>. Not the official
          website of the business. Rating and details from the public Google Maps listing, November 2026.
        </p>
      </div>
    </footer>
  )
}

export function StickyCTA() {
  return (
    <div className="sticky-cta">
      <a className="btn btn-wa btn-lg" href="#order">
        Build your tiffin
      </a>
      <a className="btn btn-wa-ghost btn-lg" href={waLink(HELLO)} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <Icon.WhatsApp width={22} height={22} />
      </a>
    </div>
  )
}
