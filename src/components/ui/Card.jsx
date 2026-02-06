export function Card({ as: Component = 'section', className = '', children, ...props }) {
  const classes = ['card'].concat(className || '').join(' ').trim()

  return (
    <Component className={classes} {...props}>
      <div className="card-inner">{children}</div>
    </Component>
  )
}

