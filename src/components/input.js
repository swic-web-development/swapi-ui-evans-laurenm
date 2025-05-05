import { createApp } from './app.js'
import './style.css'

/**
 * Input Component
 * @param {string} type - input type (text, email, password, etc.)
 * @param {string} id - input id
 * @param {string} name - input name
 * @param {string} placeholder - input placeholder
 * @param {string} value - input value
 * @param {function} onChange - change handler function
 * @param {boolean} disabled - whether input is disabled
 * @param {boolean} error - whether input has an error
 * @param {string} errorMessage - error message to display
 */
const Input = ({
  type = 'text',
  id,
  name,
  placeholder,
  value,
  onChange,
  disabled = false,
  error = false,
  errorMessage = '',
}) => {
  const baseClasses =
    'block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm'
  const stateClasses = error
    ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
  const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed' : ''

  return (
    <div className="w-full">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`${baseClasses} ${stateClasses} ${disabledClasses}`}
        aria-invalid={error ? 'true' : 'false'}
      />
      {error && errorMessage && <p className="mt-1 text-sm text-red-600">{errorMessage}</p>}
    </div>
  )
}

export default Input
