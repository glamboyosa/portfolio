import React from "react"
import classes from "./section3.module.scss"
const PortfolioSection = () => {
  return (
    <div className={classes.portfolio}>
      <h3 className={classes.portfolioHeadingPrimary}>Portfolio</h3>
      <div className={classes.portfolioFlexContainer}>
        <div className={classes.portfolioCard}>
          <div
            className={[classes.portfolioImage, classes.portfolioImage1].join(
              " "
            )}
          ></div>
          <h2 className={classes.portfolioHeadingSecondary}>Yinyagi News</h2>
          <div className={classes.portfolioSkills}>
            <span className={classes.portfolioSkillsText}>Tools: </span>
            React, Redux, Node, Express.
          </div>
          <p className={classes.portfolioDescription}>
            Goal: The goal was to design the UI consuming an API i built for a{" "}
            <br />
            fictional camp using advanced React and Redux techniques & concepts.
          </p>
          <div className={classes.portfolioLinks}>
            <a
              className={classes.portfolioLinksTag}
              href="http://yinaginews.herokuapp.com/"
            >
              Check it out!
            </a>
            <a
              className={classes.portfolioLinksTag}
              href="https://github.com/glamboyosa/yinaginews"
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
            <br />
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
          ></div>
          <h2 className={classes.portfolioHeadingSecondary}>DZT Coins</h2>
          <div className={classes.portfolioSkills}>
            <span className={classes.portfolioSkillsText}>Tools: </span>
            HTML & SCSS.
          </div>
          <p className={classes.portfolioDescription}>
            Goal: The goal was to design a landing page for a fictional bitcoin{" "}
            <br />
            trading company using cutting edge CSS.
          </p>
          <div className={classes.portfolioLinks}>
            <a
              className={classes.portfolioLinksTag}
              href="https://cranky-spence-ace670.netlify.com/"
            >
              Check it out!
            </a>
            <a
              className={classes.portfolioLinksTag}
              href="https://github.com/glamboyosa/DZT"
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
