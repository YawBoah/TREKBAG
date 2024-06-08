
function Button({buttonType, children}) {
  return (
    <button className={`btn ${buttonType === "secondary" ? 'btn--secondary' : ""}`}>{children}</button>
  )
}

export default Button