import React from "react"
import classes from "../UI/Portfolio/sections.module.css"
import Yin from "../../images/yin.png"
import Mason from "../../images/mason.png"
import Aero from "../../images/aero.png"
const frontend = () => {
  return (
    <div>
      <div className={classes.sections}>
        <h2>Camp Mason</h2>
        <img
          className={classes.portfolioImages}
          src={Mason}
          alt="camp Mason screenshot"
        />
        <p className={classes.portfolioParagraph}>
          Technologies used: React, Redux, CSS modules, Axios.
        </p>

        <p className={classes.portfolioParagraph}>
          Goal: The goal was to design the UI consuming an API i built for a
          fictional camp using advanced React and Redux techniques & concepts.
        </p>
        <a
          className={classes.portfolioLink}
          href="http://campmason.herokuapp.com/"
        >
          See it in action !
        </a>
        <a
          className={classes.portfolioLink}
          href="https://github.com/glamboyosa/campmason"
        >
          Check out the code !
        </a>
        <small>
          Please note this app is hosted with the Heroku free plan so may take
          sometime to startup initially. Simply refresh if it's taking a while
          😊
        </small>
      </div>
      <div className={classes.sections}>
        <h2>Yinagi News</h2>
        <img
          className={classes.portfolioImages}
          src={Yin}
          alt="yinagi screenshot"
        />
        <p className={classes.portfolioParagraph}>
          Technologies used: React, CSS modules, Axios.
        </p>

        <p className={classes.portfolioParagraph}>
          Goal: The goal was to implement React techniques and concepts and
          create an app by consuming a news api.
        </p>
        <a
          className={classes.portfolioLink}
          href="http://yinaginews.herokuapp.com/"
        >
          See it in action !
        </a>
        <a
          className={classes.portfolioLink}
          href="https://github.com/glamboyosa/yinaginews"
        >
          Check out the code !
        </a>
        <small>
          Please note this app is hosted with the Heroku free plan so may take
          sometime to startup initially. Simply refresh if it's taking a while
          😊
        </small>
      </div>
      <div className={classes.sections}>
        <h2>Aero-Starboard</h2>
        <img
          className={classes.portfolioImages}
          src={Aero}
          alt="Aero-Starboard screenshot"
        />
        <p className={classes.portfolioParagraph}>
          Technologies used: Vanilla JavaScript, Webpack, Babel.
        </p>

        <p className={classes.portfolioParagraph}>
          Goal: The goal was to create an application using advanced JavaScript
          concepts,techniques and tools like Webpack, Babel, classes, ES6+.{" "}
          <br />
          This application consumes the Tenor API to pull GIFs.
        </p>
        <a
          className={classes.portfolioLink}
          href="https://glamboyosa.github.io/aero-starboard/"
        >
          See it in action !
        </a>
        <a
          className={classes.portfolioLink}
          href="https://github.com/glamboyosa/aero-starboard"
        >
          Check out the code !
        </a>
      </div>
    </div>
  )
}

export default frontend
