import React from "react"
import classes from "./section2.module.scss"
import Responsive from "../../../images/responsive-design.png"
import UX from "../../../images/ux.png"
const Section2 = () => {
  return (
    <div className={classes.section2}>
      <div className={classes.section2Box}>
        <img
          className={classes.section2Img}
          src={Responsive}
          alt="responsive logo"
        />
        <span className={classes.section2Label}> Responsive</span>
        <p className={classes.section2Text}>
          My websites and apps fit to any screen <br />
          regardless of device width.
        </p>
      </div>
      <div className={classes.section2Box}>
        <img className={classes.section2Img} src={UX} alt="ux logo" />
        <span className={classes.section2Label}>ux</span>
        <p className={classes.section2Text}>
          I place a very strong emphasis on <br />
          the user experience, <br /> Believing everything you build should be
          built from the user's point of view.
        </p>
      </div>
    </div>
  )
}

export default Section2
