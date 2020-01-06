import React, { useEffect } from "react"
import "./Typed.css"
import { init } from "ityped"
const TypedContainer = () => {
  useEffect(() => {
    init("#element", {
      strings: [
        `I'm a Front-end developer,`,
        `Web designer,`,
        `Lead guitarist,`,
        `JavaScript enthusiast.`,
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      showCursor: true,
    })
  }, [])

  return <span id="element"></span>
}

export default TypedContainer
