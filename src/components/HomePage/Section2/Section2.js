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
import useMobile from "../../../libs/hooks/useMobile"
const Section2 = () => {
  const parentElementRef = useRef()
  const childElementRef = useRef()
  const { isElementIntersecting } = useIntersectionObserver(
    parentElementRef.current,
    childElementRef.current
  )
  const { isMobile } = useMobile()
  console.log(isMobile)
  return (
    <div
      ref={parentElementRef}
      style={{
        backgroundColor: "#edf0f1",
      }}
    >
      <div ref={childElementRef}>
        {isElementIntersecting && isMobile ? (
          <div className="AnimationReveal">
            <h1 style={{ fontSize: "3rem", textAlign: "center" }}>
              Tech Stack
            </h1>
            <div className={classes.section2}>
              <img
                className={classes.section2Image}
                src={JavaScript}
                title="JavaScript"
                alt="JavaScript Logo"
              />
              <img
                className={classes.section2Image}
                src={TypeScript}
                title="TypeScript"
                alt="TypeScript Logo"
              />
              <img
                className={classes.section2Image}
                src={ReactIcon}
                title="React"
                alt="React.js Logo"
              />
              <img
                className={classes.section2Image}
                src={Node}
                title="Node.js"
                alt="Node.js Logo"
              />
              <img
                className={classes.section2Image}
                src={Express}
                title="Express"
                alt="Express Logo"
              />
              <img
                className={classes.section2Image}
                src={GraphQl}
                title="GraphQL"
                alt="GraphQL Logo"
              />
              <img
                className={classes.section2Image}
                src={Sass}
                title="SCSS"
                alt="SCSS Logo"
              />
            </div>{" "}
          </div>
        ) : (
          <div>
            <h1 style={{ fontSize: "3rem", textAlign: "center" }}>
              Tech Stack
            </h1>
            <div className={classes.section2}>
              <img
                className={classes.section2Image}
                title="JavaScript"
                alt="JavaScript Logo"
                src={JavaScript}
              />
              <img
                className={classes.section2Image}
                title="TypeScript"
                alt="TypeScript Logo"
                src={TypeScript}
              />
              <img
                className={classes.section2Image}
                title="React"
                alt="React.js Logo"
                src={ReactIcon}
              />
              <img
                className={classes.section2Image}
                title="Node.js"
                alt="Node.js Logo"
                src={Node}
              />
              <img
                className={classes.section2Image}
                title="Express"
                alt="Express Logo"
                src={Express}
              />
              <img
                className={classes.section2Image}
                title="GraphQL"
                alt="GraphQL Logo"
                src={GraphQl}
              />
              <img
                className={classes.section2Image}
                title="SCSS"
                alt="SCSS Logo"
                src={Sass}
              />
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  )
}

export default Section2
