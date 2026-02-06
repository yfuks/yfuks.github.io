import React, { type ReactNode } from 'react'

export interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
  children?: ReactNode
  href: string
}

export function Link({
  className = '',
  children,
  href,
  ...props
}: LinkProps) {
  const classes = ['link', className].filter(Boolean).join(' ')
  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  )
}
