import Card from "../component/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
      <h1>About</h1>

      <p>This was an fun project i made to get familiar with react.</p>
      <h5>version: 1.0.0</h5>
      <br />
      <Link to="/">
        <h6>Back Home</h6>
      </Link>
    </Card>
  )
}

export default AboutPage
