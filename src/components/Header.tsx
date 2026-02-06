import React, { type ReactNode } from 'react'

export function Header({ children }: { children?: ReactNode }) {
  return <header className="top-bar">{children}</header>
}

function HeaderLeft({ children }: { children?: ReactNode }) {
  return <div className="top-bar-left">{children}</div>
}

function HeaderRight({ children }: { children?: ReactNode }) {
  return <div className="top-bar-right">{children}</div>
}

Header.Left = HeaderLeft
Header.Right = HeaderRight
