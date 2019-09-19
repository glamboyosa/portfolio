import React from "react"
import classes from "./section2.module.css"
import Responsive from "../../../images/responsive-design.png"
import Code from "../../../images/data.png"
import UX from "../../../images/ux.png"
const Section2 = () => {
  return (
    <div className={classes.section2}>
      <div>
        <img className={classes.img} src={Responsive} alt="responsive logo" />
        <span className={classes.span}> Responsive</span>
        <p className={classes.paragraph}>
          My websites and apps fit to any screen <br />
          regardless of device width.
        </p>
      </div>
      <div>
        <img className={classes.img} src={UX} alt="ux logo" />
        <span className={classes.span}>UX</span>
        <p className={classes.paragraph}>
          I place a very strong emphasis on <br />
          the user experience, <br /> I believe everything you build should be
          built from the user's point of view.
        </p>
      </div>
      <div>
        <img className={classes.img} src={Code} alt="coding logo" />
        <span className={classes.span}>Clean Code</span>
        <p className={classes.paragraph}>
          I believe strongly that good code is code that is <br />
          unobfuscated and easy to understand by others <br /> and so I endeavor
          to write clean code be it React or CSS.
        </p>
      </div>
    </div>
  )
}

export default Section2
