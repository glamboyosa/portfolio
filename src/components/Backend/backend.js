import React from "react"
import classes from "../UI/Portfolio/sections.module.css"

const backend = () => {
  return (
    <div>
      <div className={classes.sections}>
        <h2>Node Camps API</h2>

        <p className={classes.portfolioParagraph}>
          Technologies used: Node,Express,Nodemailer.
        </p>

        <p className={classes.portfolioParagraph}>
          Goal: The goal was to build a REST API about a fictional camping
          business to power my front-end application in Express.js
        </p>

        <a
          className={classes.portfolioLink}
          href="https://github.com/glamboyosa/node-camps-api"
        >
          Check out the code !
        </a>
      </div>
      <div className={classes.sections}>
        <h2>.Net Camps</h2>

        <p className={classes.portfolioParagraph}>
          Technologies used: .Net Core 2.2.
        </p>

        <p className={classes.portfolioParagraph}>
          Goal: The goal was to build a REST API as an alternative to my Express
          application.
        </p>

        <a
          className={classes.portfolioLink}
          href="https://github.com/glamboyosa/camps-dotnet-api"
        >
          Check out the code !
        </a>
      </div>
    </div>
  )
}

export default backend
