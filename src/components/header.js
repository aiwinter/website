import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <span class="navbar-item">
        <Link to="/">
          <h1>{siteTitle}</h1>
        </Link>
      </span>
    </div>
    <div class="navbar-menu" id="navbarExampleTransparentExample"></div>
    <div class="navbar-end stay-flex">
      <span class="navbar-item">
        <Link to="/">Home</Link>
      </span>
      <span class="navbar-item">
        <Link to="/articles">Articles</Link>
      </span>
      <span class="navbar-item">
        <Link to="/about">About</Link>
      </span>
      <span class="navbar-item">
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
