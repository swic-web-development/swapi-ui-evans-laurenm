import React from 'tailwindcss'

/**
 * TextArea Component
 * @param {string} id - textarea id
 * @param {string} name - textarea name
 * @param {string} placeholder - textarea placeholder
 * @param {string} value - textarea value
 * @param {function} onChange - change handler function
 * @param {number} rows - number of rows
 * @param {boolean} disabled - whether textarea is disabled
 * @param {boolean} error - whether textarea has an error
 * @param {string} errorMessage - error message to display
 */
const TextArea = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  rows = 4,
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
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`${baseClasses} ${stateClasses} ${disabledClasses}`}
        aria-invalid={error ? 'true' : 'false'}
      ></textarea>
      {error && errorMessage && <p className="mt-1 text-sm text-red-600">{errorMessage}</p>}
    </div>
  )
}

export default TextArea
