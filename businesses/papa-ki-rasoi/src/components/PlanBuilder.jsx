import { useMemo, useState } from 'react'
import { business, waLink } from '../data/business.js'
import { Icon, Reveal } from './ui.jsx'

const MEALS = ['Lunch', 'Dinner', 'Lunch + Dinner']
const DURATION = ['Just trying', '1 week', '1 month']
const SPICE = ['Less spicy', 'Medium', 'Spicy']
const EXTRAS = ['Extra roti', 'Raita', 'Something sweet', 'Salad']
const MODE = ['Delivery', 'I will pick up']

function Chips({ label, options, value, onChange, multi = false }) {
  const isOn = (o) => (multi ? value.includes(o) : value === o)
  return (
    <fieldset className="pb-group">
      <legend>{label}</legend>
      <div className="pb-chips">
        {options.map((o) => (
          <button
            type="button"
            key={o}
            className={`pb-chip ${isOn(o) ? 'on' : ''}`}
            aria-pressed={isOn(o)}
            onClick={() => onChange(o)}
          >
            {isOn(o) && <Icon.Check width={15} height={15} />}
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  )
}

export default function PlanBuilder() {
  const [meal, setMeal] = useState('Lunch')
  const [duration, setDuration] = useState('1 week')
  const [spice, setSpice] = useState('Medium')
  const [mode, setMode] = useState('Delivery')
  const [extras, setExtras] = useState([])
  const [area, setArea] = useState('')

  const toggleExtra = (e) =>
    setExtras((cur) => (cur.includes(e) ? cur.filter((x) => x !== e) : [...cur, e]))

  const message = useMemo(() => {
    const lines = [
      'Hi Papa Ki Rasoi Home, I would like to order a tiffin.',
      '',
      `Meal: ${meal}`,
      `For: ${duration}`,
      `Taste: ${spice}`,
      `Extras: ${extras.length ? extras.join(', ') : 'None'}`,
      `${mode === 'Delivery' ? 'Delivery area' : 'Pick-up'}: ${
        mode === 'Delivery' ? area.trim() || '(will share)' : 'I will come to the shop'
      }`,
      '',
      'Please share the plan, rates and today’s menu. Thank you!',
    ]
    return lines.join('\n')
  }, [meal, duration, spice, extras, mode, area])

  return (
    <section id="order" className="section order">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">Build your tiffin</span>
          <h2>Tell us what you like.<br />We&rsquo;ll write the message.</h2>
          <p>
            Pick your options and send them to the kitchen on WhatsApp in one tap. No typing, no
            back-and-forth.
          </p>
        </Reveal>

        <Reveal className="pb-card" delay={80}>
          <div className="pb-form">
            <Chips label="Which meal?" options={MEALS} value={meal} onChange={setMeal} />
            <Chips label="For how long?" options={DURATION} value={duration} onChange={setDuration} />
            <Chips label="How do you like it?" options={SPICE} value={spice} onChange={setSpice} />
            <Chips label="Any extras?" options={EXTRAS} value={extras} onChange={toggleExtra} multi />
            <Chips label="Delivery or pick-up?" options={MODE} value={mode} onChange={setMode} />

            {mode === 'Delivery' && (
              <label className="pb-input">
                <span>Your society or sector (optional)</span>
                <input
                  type="text"
                  value={area}
                  placeholder="e.g. Sector 52, Saraswati Kunj"
                  onChange={(e) => setArea(e.target.value)}
                />
              </label>
            )}
          </div>

          <aside className="pb-preview" aria-live="polite">
            <div className="wa-phone">
              <div className="wa-top">
                <span className="wa-avatar">PR</span>
                <div>
                  <b>{business.name}</b>
                  <small>preview of your message</small>
                </div>
              </div>
              <div className="wa-body">
                <div className="wa-bubble">
                  {message.split('\n').map((l, i) => (
                    <div key={i}>{l || ' '}</div>
                  ))}
                </div>
              </div>
            </div>
            <a className="btn btn-wa btn-lg" href={waLink(message)} target="_blank" rel="noopener noreferrer">
              <Icon.WhatsApp /> Send on WhatsApp <Icon.Arrow width={18} height={18} />
            </a>
            <p className="pb-note">Rates are shared by the kitchen. Nothing is sent until you tap.</p>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
