import React from "react"
import classes from "./section2.module.scss"
import ReactIcon from "../../../images/React.png"
import TypeScript from "../../../images/typescript.png"
import Node from "../../../images/nodejs.png"
import Express from "../../../images/express.png"
import GraphQl from "../../../images/graphql.png"
import Sass from "../../../images/sass.png"
import JavaScript from "../../../images/JavaScript.png"
const Section2 = () => {
  return (
    <div style={{ backgroundColor: "#edf0f1" }}>
      <h1 style={{ fontSize: "3rem", textAlign: "center" }}>Tech Stack</h1>
      <div className={classes.section2}>
        <img className={classes.section2Image} src={JavaScript} />
        <img className={classes.section2Image} src={TypeScript} />
        <img className={classes.section2Image} src={ReactIcon} />
        <img className={classes.section2Image} src={Node} />
        <img className={classes.section2Image} src={Express} />
        <img className={classes.section2Image} src={GraphQl} />
        <img className={classes.section2Image} src={Sass} />
      </div>
    </div>
  )
}

export default Section2
