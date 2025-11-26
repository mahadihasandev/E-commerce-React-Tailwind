
function Container({children,className}) {
  return (
    <div className={`max-w-container m-auto px-4 sm:px-6 md:px-0 ${className}`}>{children}</div>
  )
}

export default Container;