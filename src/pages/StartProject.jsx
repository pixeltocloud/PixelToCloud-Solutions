import { useState } from 'react'
import Seo from '../components/seo/Seo'
import { brand } from '../config/brand'
import { contact } from '../data/founders'
import { submitInquiry } from '../lib/inquiry'

const needs = [
  'Business website',
  'Website redesign',
  'Web application or SaaS',
  'Mobile application',
  'E-commerce',
  'AI and automation',
  'Cloud or DevOps',
  'Other',
]

const steps = ['Need', 'Business', 'Scope', 'Budget', 'Contact', 'Review']

const empty = {
  need: '',
  company: '',
  industry: '',
  website: '',
  country: 'India',
  description: '',
  goals: '',
  features: '',
  integrations: '',
  budget: '',
  timeline: '',
  name: '',
  email: '',
  phone: '',
  method: 'Email',
}

export default function StartProject() {
  const [step, setStep] = useState(0)
  const [values, setValues] = useState(empty)
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle')

  function setField(key, value) {
    setValues((current) => ({ ...current, [key]: value }))
  }

  function validate(index) {
    if (index === 0 && !values.need) return 'Choose what you need.'
    if (index === 1 && (!values.company || !values.industry || !values.country)) return 'Add the company, industry, and country.'
    if (index === 2 && values.description.trim().length < 20) return 'Describe the project in at least a short paragraph.'
    if (index === 3 && (!values.budget || !values.timeline)) return 'Choose a budget band and a timeline.'
    if (index === 4) {
      if (!values.name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return 'Add your name and a business email.'
    }
    return ''
  }

  function next() {
    const issue = validate(step)
    setError(issue)
    if (!issue) setStep((current) => current + 1)
  }

  async function submit() {
    setStatus('loading')
    setError('')
    try {
      await submitInquiry({
        name: values.name,
        email: values.email,
        phone: values.phone,
        company: values.company,
        industry: values.industry,
        website: values.website,
        country: values.country,
        projectType: values.need,
        goals: values.goals,
        features: values.features,
        integrations: values.integrations,
        budget: values.budget,
        timeline: values.timeline,
        contactMethod: values.method,
        message: values.description,
      })
      setStatus('success')
    } catch {
      setStatus('error')
      setError(`The brief could not be delivered. Email ${contact.email} or use WhatsApp. Your answers are still on this page.`)
    }
  }

  return (
    <div className="ag ag-page">
      <Seo title={`Start a project | ${brand.name}`} description="A short brief for a website, application, or automation." path="/start-project" />
      <section className="ag-hero">
        <div className="ag-wrap">
          <p className="ag-eye">Project brief</p>
          <h1>Start a project</h1>
          <p className="ag-lead">Six short steps. Budget bands are estimates for the conversation, not a quote.</p>
        </div>
      </section>
      <section className="ag-sheet">
        <div className="ag-wrap">
          <ol className="ag-progress">
            {steps.map((label, index) => (
              <li key={label} aria-current={index === step ? 'step' : undefined}>{index + 1}. {label}</li>
            ))}
          </ol>
          {status === 'success' ? (
            <p className="ag-status" role="status">Sent. We typically reply the same business day (IST). If you do not hear back, email {contact.email}.</p>
          ) : (
            <form className="ag-form" onSubmit={(event) => event.preventDefault()}>
              {step === 0 && (
                <fieldset className="ag-choices">
                  <legend>What do you need?</legend>
                  {needs.map((need) => (
                    <label key={need}>
                      <input type="radio" name="need" checked={values.need === need} onChange={() => setField('need', need)} />
                      {need}
                    </label>
                  ))}
                </fieldset>
              )}
              {step === 1 && (
                <>
                  <label>Company name<input value={values.company} onChange={(event) => setField('company', event.target.value)} /></label>
                  <label>Industry<input value={values.industry} onChange={(event) => setField('industry', event.target.value)} /></label>
                  <label>Company website<input value={values.website} onChange={(event) => setField('website', event.target.value)} placeholder="Optional" /></label>
                  <label>Country
                    <select value={values.country} onChange={(event) => setField('country', event.target.value)}>
                      <option>India</option>
                      <option>United States</option>
                      <option>United Arab Emirates</option>
                      <option>Other</option>
                    </select>
                  </label>
                </>
              )}
              {step === 2 && (
                <>
                  <label>Project description<textarea value={values.description} onChange={(event) => setField('description', event.target.value)} /></label>
                  <label>Key goals<textarea value={values.goals} onChange={(event) => setField('goals', event.target.value)} /></label>
                  <label>Required features<textarea value={values.features} onChange={(event) => setField('features', event.target.value)} /></label>
                  <label>Integrations<textarea value={values.integrations} onChange={(event) => setField('integrations', event.target.value)} /></label>
                </>
              )}
              {step === 3 && (
                <>
                  <label>Budget band
                    <select value={values.budget} onChange={(event) => setField('budget', event.target.value)}>
                      <option value="">Choose one</option>
                      <option>Under $2,000</option>
                      <option>$2,000–$8,000</option>
                      <option>$8,000–$25,000</option>
                      <option>$25,000+</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                  <label>Timeline
                    <select value={values.timeline} onChange={(event) => setField('timeline', event.target.value)}>
                      <option value="">Choose one</option>
                      <option>Focused site, 7-day window</option>
                      <option>2–6 weeks</option>
                      <option>1–3 months</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                  <p className="ag-kicker">These bands start the conversation. They are not a binding quote.</p>
                </>
              )}
              {step === 4 && (
                <>
                  <label>Name<input value={values.name} onChange={(event) => setField('name', event.target.value)} autoComplete="name" /></label>
                  <label>Business email<input value={values.email} onChange={(event) => setField('email', event.target.value)} type="email" autoComplete="email" /></label>
                  <label>Phone, optional<input value={values.phone} onChange={(event) => setField('phone', event.target.value)} autoComplete="tel" /></label>
                  <label>Preferred contact
                    <select value={values.method} onChange={(event) => setField('method', event.target.value)}>
                      <option>Email</option>
                      <option>Phone</option>
                      <option>WhatsApp</option>
                    </select>
                  </label>
                </>
              )}
              {step === 5 && (
                <dl className="ag-specs">
                  {Object.entries(values).filter(([, value]) => value).map(([key, value]) => (
                    <div key={key}><dt>{key}</dt><dd>{value}</dd></div>
                  ))}
                </dl>
              )}
              {error ? <p className="ag-error" role="alert">{error}</p> : null}
              <div className="ag-actions">
                {step > 0 ? <button type="button" className="ag-btn ag-btn-line" onClick={() => setStep((current) => current - 1)}>Back</button> : null}
                {step < 5 ? <button type="button" className="ag-btn ag-btn-solid" onClick={next}>Continue</button> : (
                  <button type="button" className="ag-btn ag-btn-solid" onClick={submit} disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending…' : 'Submit brief'}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
