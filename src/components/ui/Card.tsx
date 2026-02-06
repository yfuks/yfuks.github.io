import React, { type ReactNode } from 'react'

export interface CardProps extends React.ComponentPropsWithoutRef<'section'> {
  children?: ReactNode
}

export function Card({ className = '', children, ...props }: CardProps) {
  const classes = ['card'].concat(className).filter(Boolean).join(' ').trim()
  return (
    <section className={classes} {...props}>
      <div className="card-inner">{children}</div>
    </section>
  )
}
