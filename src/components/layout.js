/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../index.scss"
import Aux from "../hoc/hoc"
import { Element } from "react-scroll"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Aux>
      <main>{children}</main>
    </Aux>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
