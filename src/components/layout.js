/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "../../scss/styles.scss"

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

  const [toggleClass, setToggleClass] = useState(false)

  useEffect(() => {
    const isClient = typeof window === "object"

    if (!isClient) {
      return false
    }

    if (window.location.pathname === `/`) {
      setToggleClass("true")
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={`${toggleClass ? "bd-main bg" : "bd-main"}`}>
        {children}
      </main>
      <footer className="footer is-dark">
        <div className="container is-fluid">
          <div className="content">
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
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
