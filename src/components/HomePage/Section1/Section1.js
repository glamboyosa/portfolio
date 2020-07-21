import React, { useRef } from "react"
import classes from "./Section1.module.scss"
import useIntersectionObserver from "../../../libs/hooks/useIntersectionObserver"
import ProfilePhoto from "../../../images/Potrait.png"
import useMobile from "../../../libs/hooks/useMobile"
const Section1 = () => {
  const parentElementRef = useRef()
  const childElementRef = useRef()
  const { isElementIntersecting } = useIntersectionObserver(
    parentElementRef.current,
    childElementRef.current
  )
  const { isMobile } = useMobile()

  return (
    <div ref={parentElementRef} className={classes.section1}>
      <div ref={childElementRef}>
        <div className="">
          <h3 className={classes.section1Heading}>What I do ?</h3>
          <div className={classes.section1FlexParent}>
            <div>
              <img
                style={{
                  width: "35%",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
                src={ProfilePhoto}
                alt="my profile photo"
              />
            </div>
            <div>
              <p className={classes.section1Text}>
                I'm a frontend focused fullstack developer passionate about
                React (Native), Hooks & GraphQL. I'm also author of the{" "}
                <a
                  className={classes.section1Link}
                  href="https://www.npmjs.com/package/uwadie"
                  target="_blank"
                >
                  Uwadie
                </a>{" "}
                plugin <br /> When i'm not coding or writing blog posts, i'm
                usually thrashing out licks on guitar a la Stevie Ray Vaughan or
                on Twitter or you could catch me on Youtube watching every and{" "}
                <br />
                anything from videos on the world war to The Weeknd live.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1
