import React from "react"
import classes from "./section3.module.scss"
const PortfolioSection = () => {
  return (
    <div className={classes.portfolio}>
      <h3 className={classes.portfolioHeadingPrimary}>Featured Projects</h3>
      <div className={classes.portfolioFlexContainer}>
        <div className={classes.portfolioCard}>
          <div
            className={[classes.portfolioImage, classes.portfolioImage1].join(
              " "
            )}
          />
          <h2 className={classes.portfolioHeadingSecondary}>Seduire</h2>
          <div className={classes.portfolioSkills}>
            <span className={classes.portfolioSkillsText}>Tools: </span>
            React, TypeScript, Apollo Client, Node, Express-GraphQL, Stripe API
            & Styled-Components.
          </div>
          <p className={classes.portfolioDescription}>
            Goal: The goal was to build an online shop using fullstack GraphQL
            stack, cutting edge technologies and advanced techniques with
            emphasis and the design and UX.
          </p>
          <div className={classes.portfolioLinks}>
            <a
              className={classes.portfolioLinksTag}
              href="https://naughty-lichterman-46db1e.netlify.com/"
            >
              Check it out!
            </a>
            <a
              className={classes.portfolioLinksTag}
              href="https://github.com/glamboyosa/seduire-frontend"
            >
              View the source code !
            </a>
          </div>
        </div>
        <div
          className={[classes.portfolioCard, classes.portfolioCardDesign].join(
            " "
          )}
        >
          <div
            className={[classes.portfolioImage, classes.portfolioImage2].join(
              " "
            )}
          ></div>
          <h2 className={classes.portfolioHeadingSecondary}>
            Reusable CSS Components
          </h2>
          <div className={classes.portfolioSkills}>
            <span className={classes.portfolioSkillsText}>Tools: </span>
            HTML & CSS.
          </div>
          <p className={classes.portfolioDescription}>
            Goal: The goal of the project is to maintain a repo of resuable CSS{" "}
            code that other developers can find useful when building sites.
          </p>
          <div className={classes.portfolioLinks}>
            <a
              className={classes.portfolioLinksTag}
              href="https://github.com/glamboyosa/Reusable-CSS-Components"
            >
              View the source code (and contribute 😊) !
            </a>
          </div>
        </div>
      </div>
      <div className={classes.portfolioFlexContainer}>
        <div className={classes.portfolioCard}>
          <div
            className={[classes.portfolioImage, classes.portfolioImage3].join(
              " "
            )}
          />
          <h2 className={classes.portfolioHeadingSecondary}>Camp Mason</h2>
          <div className={classes.portfolioSkills}>
            <span className={classes.portfolioSkillsText}>Tools: </span>
            React, Redux, Node, Express.
          </div>
          <p className={classes.portfolioDescription}>
            Goal: The goal was to design the UI consuming an API i built for a{" "}
            fictional camp using advanced React and Redux techniques & concepts.
          </p>
          <div className={classes.portfolioLinks}>
            <a
              className={classes.portfolioLinksTag}
              href="http://campmason.herokuapp.com/"
            >
              Check it out!
            </a>
            <a
              className={classes.portfolioLinksTag}
              href="https://github.com/glamboyosa/campmason"
            >
              View the source code !
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSection
