import React from "react"
import classes from "./header.module.css"
import TypedContainer from "../../../Containers/Typed/TypedContainer"
const header = () => {
  return (
    <div className={classes.header}>
      <p className={classes.p}>
        Hello my name is Timothy Ogbemudia
        <br />
        <TypedContainer style={{ color: "white" }} />
        <br />
        <button className={classes.btn}>
          <a href="mailto:ogbemudiatimothy@gmail.com?subject=I'm interested in your services">
            Contact Me
          </a>
        </button>
      </p>
    </div>
  )
}

export default header
