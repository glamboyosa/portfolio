import React from "react"
import classes from "../UI/Portfolio/sections.module.css"
import bootstrap from "../../images/bootstrap.png"
import flexbox from "../../images/flexbox.png"
import Vs from "../../images/VS.png"
const design = () => {
  return (
    <div>
      <div className={classes.sections}>
        <h2>Bootstrap Recreation</h2>
        <img
          className={classes.portfolioImages}
          src={bootstrap}
          alt="bootstrap screenshot"
        />
        <p className={classes.portfolioParagraph}>
          Technologies used: HTML, CSS
        </p>

        <p className={classes.portfolioParagraph}>
          Goal: The goal was to recreate the official bootstrap landing page
          using just HTML and regular block style CSS.
        </p>
        <a
          className={classes.portfolioLink}
          href="https://glamboyosa.github.io/bootstraprecreation/#"
        >
          See it in action !
        </a>
        <a
          className={classes.portfolioLink}
          href="https://github.com/glamboyosa/bootstraprecreation"
        >
          Check out the code !
        </a>
      </div>
      <div className={classes.sections}>
        <h2>Google Webmasters Recreation</h2>
        <img
          className={classes.portfolioImages}
          src={flexbox}
          alt="Google webmasters screenshot"
        />
        <p className={classes.portfolioParagraph}>
          Technologies used: HTML, CSS flexbox, vanilla JavaScript
        </p>

        <p className={classes.portfolioParagraph}>
          Goal: The goal was to recreate the official Google webmasters landing
          page using just HTML and regular CSS flexbox. <br />
          Very minor Vanilla JavaScript is used to implement a sticky nav.
        </p>
        <a
          className={classes.portfolioLink}
          href="https://pedantic-meninsky-6b1101.netlify.com/"
        >
          See it in action !
        </a>
        <a
          className={classes.portfolioLink}
          href="https://github.com/glamboyosa/webmasters-flexbox"
        >
          Check out the code !
        </a>
      </div>
      <div className={classes.sections}>
        <h2>Visual Studio Preview Recreation</h2>
        <img
          className={classes.portfolioImages}
          src={Vs}
          alt="Visual Studio Preview screenshot"
        />
        <p className={classes.portfolioParagraph}>
          Technologies used: HTML, a fluid CSS grid, vanilla JavaScript
        </p>

        <p className={classes.portfolioParagraph}>
          Goal: The goal was to recreate the official Visual Studio Preview
          landing page using HTML and a fluid CSS grid. <br />
          Very minor Vanilla JavaScript is used to implement some functionality.
        </p>
        <a
          className={classes.portfolioLink}
          href="https://glamboyosa.github.io/VSRecreation/"
        >
          See it in action !
        </a>
        <a
          className={classes.portfolioLink}
          href="https://github.com/glamboyosa/VSRecreation"
        >
          Check out the code !
        </a>
      </div>
    </div>
  )
}

export default design
