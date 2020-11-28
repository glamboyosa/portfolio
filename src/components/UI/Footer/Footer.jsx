import React from "react"
import classes from "./footer.module.scss"
import { IoLogoTwitter, IoLogoGithub, IoIosMail } from "react-icons/io"
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className={classes.footer}>
      <h4 className={classes.footerText}>Want to chat about something?</h4>
      <div className={classes.footerContainer}>
        <a href="mailto:ogbemudiatimothy@gmail.com?subject=I'm interested in your services">
          <IoIosMail className={classes.mail} />
        </a>
        <a href="https://twitter.com/messages/compose?recipient_id=952198434">
          <IoLogoTwitter className={classes.twitter} />
        </a>
        <a href="https://github.com/glamboyosa">
          <IoLogoGithub className={classes.github} />
        </a>
      </div>
      <span>
        Made with <small>❤</small> by Timothy Ogbemudia &copy;
        {` ${year}`}
      </span>
      <br />
      <span>
        Built with <a href="https://www.gatsbyjs.org/">Gatsby.</a>
      </span>
    </footer>
  )
}

export default Footer
