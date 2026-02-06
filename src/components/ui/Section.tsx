import React, { type ReactNode } from 'react'

export interface SectionProps extends React.ComponentPropsWithoutRef<'section'> {
  children?: ReactNode
}

export function Section({ className = '', children, ...props }: SectionProps) {
  const classes = ['page-container', className].filter(Boolean).join(' ')
  return (
    <section className={classes} {...props}>
      {children}
    </section>
  )
}
