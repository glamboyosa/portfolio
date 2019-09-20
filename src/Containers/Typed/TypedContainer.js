import React, { Component } from "react"
import "./Typed.css"
import { init } from "ityped"
class TypedContainer extends Component {
  componentDidMount() {
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
  }
  render() {
    return <span id="element"></span>
  }
}

export default TypedContainer
