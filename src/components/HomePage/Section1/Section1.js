import React from "react"
import classes from "./Section1.module.scss"
const Section1 = () => {
  return (
    <div className={classes.section1}>
      <h3 className={classes.section1Heading}>What I do ?</h3>
      <p className={classes.section1Text}>
        I'm a frontend focused fullstack developer passionate about React,
        Hooks, GraphQL and design. <br /> When i'm not coding or writing blog
        posts, i'm usually thrashing out licks on guitar a la Stevie Ray Vaughan
        or on Twitter or you could catch me on Youtube watching every and <br />
        anything from videos on the world war to The Weeknd live.
      </p>
    </div>
  )
}

export default Section1
