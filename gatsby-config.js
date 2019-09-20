module.exports = {
  siteMetadata: {
    title: `Timothy Ogbemudia`,
    description: `Timothy Ogbemudia's portfolio website`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Timothy Ogbemudia`,
        short_name: `Timothy`,
        start_url: `/`,
        background_color: `#cf6d17`,
        theme_color: `#cf6d17`,
        display: `standalone`,
        include_favicon: false,
        icon: `src/images/Timothy.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/index/`, `/frontend/`, `/backend/`, `/design/`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
