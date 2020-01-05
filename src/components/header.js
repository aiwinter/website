import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav className="navbar is-transparent">
    <div className="navbar-brand">
      <span className="navbar-item">
        <Link to="/">
          <h1>{siteTitle}</h1>
        </Link>
      </span>
    </div>
    <div className="navbar-menu" id="navbarExampleTransparentExample"></div>
    <div className="navbar-end stay-flex">
      <span className="navbar-item">
        <Link to="/">Home</Link>
      </span>
      <span className="navbar-item">
        <Link to="/articles">Articles</Link>
      </span>
      <span className="navbar-item">
        <Link to="/about">About</Link>
      </span>
      <span className="navbar-item">
        <Link to="/help">Help</Link>
      </span>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
