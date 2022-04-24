import { Link } from "react-router-dom"

function Header({ text, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyle}>
      <div className="container">
        <Link to="/">
          <h1>{text}</h1>
        </Link>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: "REVIEW",
  bgColor: "rgba(0,0,0,0.5)",
  textColor: "#ff6a95",
}
export default Header
