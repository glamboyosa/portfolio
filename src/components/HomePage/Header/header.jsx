import { Link as GatsbyLink } from "gatsby"
import React, { useEffect, useRef, useState } from "react"
import { animateScroll as scroll, Events, Link, scroller } from "react-scroll"
import TypedContainer from "../../../Containers/Typed/TypedContainer"
import classes from "./header.module.scss"
const Header = () => {
  const [isFixed, setIsFixed] = useState(false)
  const list = useRef("")
  const fixNav = () => {
    if (window.scrollY > 500) {
      setIsFixed(!isFixed)
    } else {
      setIsFixed(false)
    }
  }
  useEffect(() => {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments)
    })

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments)
    })
    window.addEventListener("scroll", fixNav)
    list.current.addEventListener("click", checkHandler)
    return () => {
      Events.scrollEvent.remove("begin")
      Events.scrollEvent.remove("end")
      window.removeEventListener("scroll", fixNav)
      list.current.removeEventListener("click", checkHandler)
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
  const checkHandler = () => {
    document.getElementById("checkbox").checked = false
  }
  return (
    <div className={classes.header}>
      <nav className={isFixed && classes.nav}>
        <input type="checkbox" id="checkbox" className={classes.navCheckbox} />
        <label className={classes.navLabel} for="checkbox">
          <span className={classes.navIcon}>&nbsp;</span>
        </label>
        <ul className={classes.navList} ref={list}>
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
            {" "}
            <Link to="stack" spy={true} smooth={true} duration={1000}>
              Tools
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
