import React, { useState, useEffect } from "react"
import Header from "../components/HomePage/Header/header"
import FirstSection from "../components/HomePage/Section1/Section1"
import Layout from "../components/layout"
import Section2 from "../components/HomePage/Section2/Section2"
import Section3 from "../components/HomePage/Section3/Section3"
import SEO from "../components/seo"
import classes from "../components/UI/Index/index.module.css"
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"
const IndexPage = () => {
  const [isFixed, setIsFixed] = useState(false)
  const fixNav = () => {
    if (window.scrollY > 500) {
      setIsFixed(!isFixed)
    } else {
      setIsFixed(!isFixed)
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
    <Layout>
      <SEO title="Home" />
      <nav className={isFixed ? classes.nav : null}>
        <ul className={classes.mainNav}>
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
        </ul>
      </nav>
      <Element name="home">
        <Header />
      </Element>

      <Element name="about">
        <FirstSection />
      </Element>
      <Section2 />
      <Element name="portfolio">
        <Section3 />
      </Element>
    </Layout>
  )
}

export default IndexPage
