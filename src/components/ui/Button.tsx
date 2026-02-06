import React, { type ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'ghost'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant
  children?: ReactNode
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  const variantClass = variant ? `btn--${variant}` : ''
  const classes = ['btn', variantClass, className].filter(Boolean).join(' ')
  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
