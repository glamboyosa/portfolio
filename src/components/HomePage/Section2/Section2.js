import React, { useRef } from "react"
import classes from "./section2.module.scss"
import ReactIcon from "../../../images/React.png"
import TypeScript from "../../../images/typescript.png"
import Node from "../../../images/nodejs.png"
import Express from "../../../images/express.png"
import GraphQl from "../../../images/graphql.png"
import Sass from "../../../images/sass.png"
import JavaScript from "../../../images/JavaScript.png"
import useIntersectionObserver from "../../../libs/hooks/useIntersectionObserver"
const Section2 = () => {
  const parentElementRef = useRef()
  const childElementRef = useRef()
  const { isElementIntersecting } = useIntersectionObserver(
    parentElementRef.current,
    childElementRef.current
  )
  return (
    <div
      ref={parentElementRef}
      style={{
        backgroundColor: "#edf0f1",
      }}
    >
      <div ref={childElementRef}>
        {isElementIntersecting ? (
          <div className="AnimationReveal">
            <h1 style={{ fontSize: "3rem", textAlign: "center" }}>
              Tech Stack
            </h1>
            <div className={classes.section2}>
              <img
                className={classes.section2Image}
                src={JavaScript}
                title="JavaScript"
              />
              <img
                className={classes.section2Image}
                src={TypeScript}
                title="TypeScript"
              />
              <img
                className={classes.section2Image}
                src={ReactIcon}
                title="React"
              />
              <img
                className={classes.section2Image}
                src={Node}
                title="Node.js"
              />
              <img
                className={classes.section2Image}
                src={Express}
                title="Express"
              />
              <img
                className={classes.section2Image}
                src={GraphQl}
                title="GraphQL"
              />
              <img className={classes.section2Image} src={Sass} title="SCSS" />
            </div>{" "}
          </div>
        ) : (
          <div className="AnimationHidden">
            <h1 style={{ fontSize: "3rem", textAlign: "center" }}>
              Tech Stack
            </h1>
            <div className={classes.section2}>
              <img className={classes.section2Image} src={JavaScript} />
              <img className={classes.section2Image} src={TypeScript} />
              <img className={classes.section2Image} src={ReactIcon} />
              <img className={classes.section2Image} src={Node} />
              <img className={classes.section2Image} src={Express} />
              <img className={classes.section2Image} src={GraphQl} />
              <img className={classes.section2Image} src={Sass} />
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  )
}

export default Section2
