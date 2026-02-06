export function Header({ children }) {
  return <header className="top-bar">{children}</header>
}

function HeaderLeft({ children }) {
  return <div className="top-bar-left">{children}</div>
}

function HeaderRight({ children }) {
  return <div className="top-bar-right">{children}</div>
}

Header.Left = HeaderLeft
Header.Right = HeaderRight
