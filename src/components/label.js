import React from 'react'

/**
 * Label Component
 * @param {string} htmlFor - ID of the form element this label is for
 * @param {boolean} required - whether the field is required
 * @param {React.ReactNode} children - label content
 */
const Label = ({ htmlFor, required = false, children }) => {
  return (
    <label htmlFor={htmlFor} className="mb-1 block text-sm font-medium text-gray-700">
      {children}
      {required && <span className="ml-1 text-red-600">*</span>}
    </label>
  )
}

export default Label
