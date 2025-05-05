import React from 'react'

/**
 * Button Component
 * @param {string} variant - primary, secondary, danger, success
 * @param {string} size - sm, md, lg
 * @param {boolean} disabled - whether button is disabled
 * @param {function} onClick - click handler function
 * @param {React.ReactNode} children - button content
 */
const Button = ({ variant = 'primary', size = 'md', disabled = false, onClick, children }) => {
  // Base styles
  const baseStyles = 'font-medium rounded focus:outline-none transition-colors'

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  }

  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white',
  }

  // Disabled state
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

  // Combine all classes
  const buttonClasses = `${baseStyles} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses}`

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
