import React from 'react'

interface LabelProps {
  children: React.ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const Label = ({ children, ...props }: LabelProps) => (
  <label {...props}>{children}</label>
)

export default Label
