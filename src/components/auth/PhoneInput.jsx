import { countries } from '../../lib/auth/phone'
import CountrySelect from './CountrySelect'

export default function PhoneInput({ country, national, onCountry, onNational, disabled }) {
  return (
    <div className="phone-field">
      <CountrySelect
        id="auth-country"
        value={country}
        options={countries}
        getValue={(item) => item.iso}
        getLabel={(item) => item.name}
        getHint={(item) => `+${item.dial}`}
        onChange={onCountry}
        disabled={disabled}
      />
      <label htmlFor="auth-phone">Phone number</label>
      <input
        id="auth-phone"
        value={national}
        disabled={disabled}
        inputMode="tel"
        autoComplete="tel-national"
        placeholder="98765 43210"
        onChange={(event) => onNational(event.target.value)}
      />
    </div>
  )
}
