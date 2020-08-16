import React from "react"
import classes from "./section3.module.scss"
const PortfolioSection = () => {
  const projects = [
    {
      heading: "Seduire",
      stack: `React, TypeScript, Apollo Client, Node, Express-GraphQL, Stripe API 
    & Styled-Components.`,
      description: `Goal: The goal was to build an online shop using fullstack GraphQL
    , cutting edge technologies and advanced techniques.`,
      liveLink: "https://naughty-lichterman-46db1e.netlify.com/",
      githubLink: "https://github.com/glamboyosa/seduire-frontend",
    },
    {
      heading: "Reusable CSS Components",
      stack: `HTML & CSS.`,
      description: `Goal: The goal of the project is to maintain a repo of resuable CSS
    code that other developers can find useful when building sites.`,
      liveLink: null,
      githubLink: "https://github.com/glamboyosa/Reusable-CSS-Components",
    },
    {
      heading: "React Native News",
      stack: `React Native`,
      description: `Goal: The goal of this project was to develop a React Native mobile application with offline 
    reading functionality.`,
      liveLink: null,
      githubLink: "https://github.com/glamboyosa/react-native-news",
    },
    {
      heading: "Camp Mason",
      stack: `React, Redux, Node, Express.`,
      description: `Goal: The goal was to design the UI consuming an API i built for a
    fictional camp using advanced React and Redux techniques & concepts.`,
      liveLink: "http://campmason.herokuapp.com/",
      githubLink: "https://github.com/glamboyosa/campmason",
    },
  ]
  return (
    <div className={classes.portfolio}>
      <h3 className={classes.portfolioHeadingPrimary}>Featured Projects</h3>
      <div className={classes.portfolioFlexContainer}>
        {projects.map(projectItem => (
          <div className={classes.portfolioCard}>
            <h2 className={classes.portfolioHeadingSecondary}>
              {projectItem.heading}
            </h2>
            <div className={classes.portfolioSkills}>
              <span className={classes.portfolioSkillsText}>Tools: </span>
              {projectItem.stack}
            </div>
            <p className={classes.portfolioDescription}>
              {projectItem.description}
            </p>
            <div className={classes.portfolioLinks}>
              {projectItem.liveLink && (
                <a
                  target="__blank"
                  className={classes.portfolioLinksTag}
                  href={projectItem.liveLink}
                >
                  Check it out!
                </a>
              )}
              <a
                target="__blank"
                className={classes.portfolioLinksTag}
                href={projectItem.githubLink}
              >
                View the source code !
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioSection
