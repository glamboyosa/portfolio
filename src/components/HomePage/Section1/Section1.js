import React, { useRef } from "react"
import classes from "./Section1.module.scss"
import useIntersectionObserver from "../../../libs/hooks/useIntersectionObserver"
const Section1 = () => {
  const parentElementRef = useRef()
  const childElementRef = useRef()
  const { isElementIntersecting } = useIntersectionObserver(
    parentElementRef.current,
    childElementRef.current
  )

  return (
    <div ref={parentElementRef} className={classes.section1}>
      <div ref={childElementRef}>
        {isElementIntersecting ? (
          <div className="AnimationReveal">
            <h3 className={classes.section1Heading}>What I do ?</h3>

            <p className={classes.section1Text}>
              I'm a frontend focused fullstack developer passionate about React,
              Hooks, GraphQL and design. <br /> When i'm not coding or writing
              blog posts, i'm usually thrashing out licks on guitar a la Stevie
              Ray Vaughan or on Twitter or you could catch me on Youtube
              watching every and <br />
              anything from videos on the world war to The Weeknd live.
            </p>
          </div>
        ) : (
          <div className="AnimationHidden">
            <h3 className={classes.section1Heading}>What I do ?</h3>

            <p className={classes.section1Text}>
              I'm a frontend focused fullstack developer passionate about React,
              Hooks, GraphQL and design. <br /> When i'm not coding or writing
              blog posts, i'm usually thrashing out licks on guitar a la Stevie
              Ray Vaughan or on Twitter or you could catch me on Youtube
              watching every and <br />
              anything from videos on the world war to The Weeknd live.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Section1
