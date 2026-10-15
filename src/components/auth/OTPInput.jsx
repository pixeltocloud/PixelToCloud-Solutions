import { useEffect, useRef } from 'react'

export default function OTPInput({ value, onChange, disabled, invalid }) {
  const refs = useRef([])
  const digits = Array.from({ length: 6 }, (_, index) => value[index] || '')

  useEffect(() => {
    refs.current[0]?.focus()
  }, [])

  function commit(next) {
    onChange(next.join('').replace(/\D/g, '').slice(0, 6))
  }

  function writeAt(index, raw) {
    const clean = raw.replace(/\D/g, '')
    if (!clean) {
      const next = [...digits]
      next[index] = ''
      commit(next)
      return
    }
    if (clean.length > 1) {
      const pasted = clean.slice(0, 6).split('')
      const next = Array.from({ length: 6 }, (_, slot) => pasted[slot] || '')
      commit(next)
      refs.current[Math.min(pasted.length, 5)]?.focus()
      return
    }
    const next = [...digits]
    next[index] = clean
    commit(next)
    if (index < 5) refs.current[index + 1]?.focus()
  }

  function onKeyDown(index, event) {
    if (event.key === 'Backspace' && !digits[index] && index > 0) {
      event.preventDefault()
      const next = [...digits]
      next[index - 1] = ''
      commit(next)
      refs.current[index - 1]?.focus()
    }
    if (event.key === 'ArrowLeft' && index > 0) refs.current[index - 1]?.focus()
    if (event.key === 'ArrowRight' && index < 5) refs.current[index + 1]?.focus()
  }

  function onPaste(event) {
    const text = event.clipboardData.getData('text')
    if (!text) return
    event.preventDefault()
    writeAt(0, text)
  }

  return (
    <div className={`otp-row ${invalid ? 'is-invalid' : ''}`}>
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(node) => {
            refs.current[index] = node
          }}
          value={digit}
          inputMode="numeric"
          autoComplete={index === 0 ? 'one-time-code' : 'off'}
          aria-label={`Digit ${index + 1} of 6`}
          maxLength={index === 0 ? 6 : 1}
          disabled={disabled}
          onChange={(event) => writeAt(index, event.target.value)}
          onKeyDown={(event) => onKeyDown(index, event)}
          onPaste={onPaste}
        />
      ))}
    </div>
  )
}
