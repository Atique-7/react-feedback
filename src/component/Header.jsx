function Header({text, bgColor, textColor}) {

  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <header style = {headerStyle}>
        <div className="container">
            <h1>{text}</h1>
        </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'REVIEW',
  bgColor: 'rgba(0,0,0,0.5)',
  textColor: '#ff6a95'
}
export default Header