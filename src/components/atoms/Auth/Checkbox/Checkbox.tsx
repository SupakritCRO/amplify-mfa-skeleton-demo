import React from 'react'

interface CheckboxProps {
  checked: boolean
  onChange: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, ...props }) => {
  return (
    <input
      id='customCheckLogin'
      type='checkbox'
      checked={checked}
      onChange={onChange}
      {...props}
    />
  )
}

export default Checkbox
