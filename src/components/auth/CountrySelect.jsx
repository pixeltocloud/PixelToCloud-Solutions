import { useEffect, useId, useMemo, useRef, useState } from 'react'

export default function CountrySelect({
  id,
  label = 'Country',
  value,
  options,
  getValue,
  getLabel,
  getHint,
  onChange,
  disabled,
}) {
  const listId = useId()
  const rootRef = useRef(null)
  const searchRef = useRef(null)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)

  const selected = options.find((item) => getValue(item) === value) || null
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return options
    return options.filter((item) => {
      const name = getLabel(item).toLowerCase()
      const hint = (getHint?.(item) || '').toLowerCase()
      return name.includes(needle) || hint.includes(needle.replace('+', ''))
    })
  }, [options, query, getLabel, getHint])

  useEffect(() => {
    if (!open) return undefined
    searchRef.current?.focus()
    const onPointer = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  function choose(item) {
    onChange(getValue(item))
    setOpen(false)
    setQuery('')
  }

  function onSearchKey(event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((current) => Math.min(current + 1, filtered.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((current) => Math.max(current - 1, 0))
    } else if (event.key === 'Enter' && filtered[active]) {
      event.preventDefault()
      choose(filtered[active])
    }
  }

  return (
    <div className={`country-select ${open ? 'is-open' : ''}`} ref={rootRef}>
      <label htmlFor={id}>{label}</label>
      <button
        id={id}
        type="button"
        className="country-select-button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        disabled={disabled}
        onClick={() => {
          setActive(0)
          setOpen((current) => !current)
        }}
      >
        <span>{selected ? getLabel(selected) : 'Select a country'}</span>
        {selected && getHint ? <em>{getHint(selected)}</em> : null}
      </button>
      {open ? (
        <div className="country-select-panel">
          <input
            ref={searchRef}
            value={query}
            placeholder="Search countries"
            aria-label="Search countries"
            onChange={(event) => {
              setQuery(event.target.value)
              setActive(0)
            }}
            onKeyDown={onSearchKey}
          />
          <ul id={listId} role="listbox" aria-label={label}>
            {filtered.length === 0 ? <li className="country-select-empty">No country matches that search.</li> : null}
            {filtered.map((item, index) => {
              const itemValue = getValue(item)
              const chosen = itemValue === value
              return (
                <li key={itemValue}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={chosen}
                    className={index === active ? 'is-active' : undefined}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => choose(item)}
                  >
                    <span>{getLabel(item)}</span>
                    {getHint ? <em>{getHint(item)}</em> : null}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
