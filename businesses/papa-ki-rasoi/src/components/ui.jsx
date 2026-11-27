import { useEffect, useRef, useState } from 'react'

/* ---------- scroll reveal ---------- */
export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, seen]
}

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, seen] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? 'in' : ''} ${className}`}
      style={{ '--d': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* ---------- animated counter ---------- */
export function Counter({ to, decimals = 0, suffix = '', duration = 1400 }) {
  const [ref, seen] = useInView(0.4)
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!seen) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setVal(to)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(to * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, to, duration])
  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  )
}

/* ---------- icons (inline SVG, no dependencies) ---------- */
const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const Icon = {
  WhatsApp: (p) => (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.25-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.1.89.9-3.02-.2-.31a8.2 8.2 0 1 1 6.9 3.77Zm4.5-6.13c-.25-.12-1.46-.72-1.69-.8-.22-.09-.39-.12-.55.12-.16.25-.63.8-.78.96-.14.17-.29.18-.53.06a6.7 6.7 0 0 1-3.3-2.9c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.64 4.2 3.7 1.56.67 2.17.73 2.95.62.48-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  ),
  Leaf: (p) => (
    <svg {...base} {...p}>
      <path d="M5 21c0-9 5-15 16-16 0 11-6 16-14 16" />
      <path d="M5 21c2-5 5-8 9-10" />
    </svg>
  ),
  Shield: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Sliders: (p) => (
    <svg {...base} {...p}>
      <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0" />
      <circle cx="16" cy="6" r="2" />
      <circle cx="10" cy="12" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  ),
  Truck: (p) => (
    <svg {...base} {...p}>
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
      <circle cx="7.5" cy="17.5" r="1.8" />
      <circle cx="17.5" cy="17.5" r="1.8" />
    </svg>
  ),
  Pin: (p) => (
    <svg {...base} {...p}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  ),
  Clock: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  Phone: (p) => (
    <svg {...base} {...p}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  ),
  Arrow: (p) => (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  Check: (p) => (
    <svg {...base} strokeWidth={2.4} {...p}>
      <path d="m5 12 5 5 9-10" />
    </svg>
  ),
  Star: (p) => (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="m12 2.8 2.8 5.8 6.4.9-4.6 4.5 1.1 6.3L12 17.3l-5.7 3 1.1-6.3L2.8 9.5l6.4-.9L12 2.8Z" />
    </svg>
  ),
  Plus: (p) => (
    <svg {...base} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  Sparkle: (p) => (
    <svg {...base} fill="currentColor" stroke="none" {...p}>
      <path d="M12 2c.6 4.6 2.4 8.4 10 10-7.6 1.6-9.4 5.4-10 10-.6-4.6-2.4-8.4-10-10 7.6-1.6 9.4-5.4 10-10Z" />
    </svg>
  ),
}
