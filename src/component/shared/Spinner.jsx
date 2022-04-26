import React from "react"
import spin from "../assets/cat.gif"

function spinner() {
  return (
    <img
      src={spin}
      alt="Loading....."
      style={{
        width: "100px",
        margin: "auto",
        display: "block",
      }}
    />
  )
}

export default spinner
