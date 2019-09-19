import React from "react"
import classes from "./footer.module.css"
const Footer = () => {
  return (
    <footer>
      <h4 className={classes.h4}>Want to chat about something?</h4>
      <div className={classes.flexParent}>
        <a href="mailto:ogbemudiatimothy@gmail.com?subject=I'm interested in your services">
          <i className={["icon ion-md-mail", classes.mail].join(" ")}></i>
        </a>
        <a href="https://twitter.com/messages/compose?recipient_id=952198434">
          <i
            className={["icon ion-logo-twitter", classes.twitter].join(" ")}
          ></i>
        </a>
        <a href="https://github.com/glamboyosa">
          <i className={["icon ion-logo-github", classes.github].join(" ")}></i>
        </a>
      </div>
      <span>
        Made with <small>❤</small> by Timothy Ogbemudia.
      </span>
      <br />
      <span>
        Built with <a href="https://www.gatsbyjs.org/">Gatsby.</a>
      </span>
    </footer>
  )
}

export default Footer
