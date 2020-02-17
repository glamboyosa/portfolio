import React, { useState, useEffect } from "react"
import classes from "./header.module.scss"
import TypedContainer from "../../../Containers/Typed/TypedContainer"
import { Link as GatsbyLink } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { IoIosMenu } from "react-icons/io"
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"
const Header = () => {
  const [isFixed, setIsFixed] = useState(false)
  console.log(isFixed)
  const fixNav = () => {
    if (window.scrollY > 500) {
      setIsFixed(!isFixed)
    } else {
      setIsFixed(false)
    }
  }
  useEffect(() => {
    console.log("mounts the DOM")
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments)
    })

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments)
    })
    window.addEventListener("scroll", fixNav)
  }, [])
  useEffect(() => {
    return () => {
      Events.scrollEvent.remove("begin")
      Events.scrollEvent.remove("end")
      window.removeEventListener("scroll", fixNav)
      console.log("unmounted the DOM")
    }
  }, [])
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  const scrollTo = () => {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }
  const scrollToWithContainer = () => {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve()
        Events.scrollEvent.remove("end")
      })

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      })
    })

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    )
  }
  return (
    <div className={classes.header}>
      <nav className={isFixed && classes.nav}>
        <input type="checkbox" id="checkbox" className={classes.navCheckbox} />
        <label className={classes.navLabel} for="checkbox">
          <span className={classes.navIcon}>&nbsp;</span>
        </label>
        <ul className={classes.navList}>
          <li>
            {" "}
            <Link to="home" spy={true} smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} duration={1000}>
              About
            </Link>
          </li>
          <li>
            <Link to="portfolio" spy={true} smooth={true} duration={1000}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
          <li>
            <GatsbyLink className={classes.headerLink} to="/uses">
              Uses
            </GatsbyLink>
          </li>
        </ul>
      </nav>
      <p className={classes.headerText}>
        Hello my name is Timothy Ogbemudia
        <br />
        <TypedContainer style={{ color: "white" }} />
        <br />
        <div className="u-center-text">
          <button className={classes.btn}>
            <a
              className={classes.headerLink}
              href="mailto:ogbemudiatimothy@gmail.com?subject=I'm interested in your services"
            >
              Contact Me
            </a>
          </button>
        </div>
      </p>
    </div>
  )
}

export default Header
