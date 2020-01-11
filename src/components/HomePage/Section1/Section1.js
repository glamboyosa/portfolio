import React from "react"
import classes from "./Section1.module.scss"
const Section1 = () => {
  return (
    <div className={classes.section1}>
      <h3 className={classes.section1Heading}>What I do ?</h3>
      <p className={classes.section1Text}>
        I'm a frontend developer and JavaScript enthusiast. <br /> I enjoy
        crafting beautiful user interfaces with React or JavaScript in general.{" "}
        <br /> I also enjoy building APIs with Node &amp; Express. <br /> When
        i'm not writing or learning about code , <br />
        i'm usually thrashing out licks on guitar a la Stevie Ray Vaughan or on
        Twitter or <br /> you could catch me on Youtube watching every and{" "}
        <br />
        anything from videos on the world war to The Weeknd live.
      </p>
    </div>
  )
}

export default Section1
