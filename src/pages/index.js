import React, { Component } from "react"

import Header from "../components/HomePage/Header/header"
import FirstSection from "../components/HomePage/Section1/Section1"
import Layout from "../components/layout"
import Section2 from "../components/HomePage/Section2/Section2"
import Section3 from "../components/HomePage/Section3/Section3"
import SEO from "../components/seo"
import classes from "../components/UI/Index/index.module.css"
import * as Scroll from "react-scroll"
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"
class IndexPage extends Component {
  state = {
    isFixed: false,
  }
  fixNav = () => {
    if (window.scrollY > 500) {
      console.log(` my window`)

      this.setState({ isFixed: true })
    } else {
      this.setState({ isFixed: false })
    }
  }
  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments)
    })

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments)
    })
    window.addEventListener("scroll", this.fixNav)
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin")
    Events.scrollEvent.remove("end")
    window.removeEventListener("scroll", this.fixNav)
  }
  scrollToTop = () => {
    scroll.scrollToTop()
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    })
  }
  scrollToWithContainer() {
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

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <nav className={this.state.isFixed ? classes.nav : null}>
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
}

export default IndexPage
