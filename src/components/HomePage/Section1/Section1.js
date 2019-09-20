import React from "react"
import classes from "./Section1.module.css"
const Section1 = () => {
  return (
    <div className={classes.section1}>
      <h3>What I do ?</h3>
      <p className={classes.P}>
        I'm a frontend developer and JavaScript enthusiast. <br /> I enjoy
        crafting beautiful user interfaces with React or JavaScript in general.{" "}
        <br /> I place a very strong emphasis on the user experience <br /> and
        maintainable code as great code is code that is easy to understand.{" "}
        <br /> In addition to frontend development, I occasionally build REST
        APIs <br /> with Node and Express and sometimes .Net Core 2.2.
        <br /> In my spare time I enjoy experimenting with React framework's
        like Gatsby.
      </p>
    </div>
  )
}

export default Section1
