/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "../../styles.scss"

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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer class="footer">
        <div class="content">
          <p>A. I. Winter© {new Date().getFullYear()}</p>
          <p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:aiwinter@gmail.com"
            >
              aiwinter@gmail.com
            </a>
          </p>
          <p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/aiwinter"
            >
              Github: https://github.com/aiwinter
            </a>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/help">Help</Link>
          </p>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
