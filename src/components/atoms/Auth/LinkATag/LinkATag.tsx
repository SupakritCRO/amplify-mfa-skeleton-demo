import React from 'react'

interface LinkATag {
  to: string
  children: React.ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const LinkATag = ({ to, children, ...props }: LinkATag) => (
  <a href={to} {...props}>
    {children}
  </a>
)

export default LinkATag
