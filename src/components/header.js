import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav className="navbar is-transparent">
    <div className="container is-fluid">
      <div className="navbar-brand"></div>
      <div className="navbar-menu" id="navbarExampleTransparentExample"></div>
      <div className="navbar-end stay-flex">
        <span className="navbar-item">
          <Link to="/">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 307.37 65.88"
              alt="AI Winter"
              className="nav--logo"
            >
              <defs></defs>
              <polyline
                class="cls-1"
                points="265.17 59.27 263.52 65.38 267.3 65.38 270 65.38"
              />
              <line
                class="cls-1"
                x1="279.07"
                y1="7.72"
                x2="265.47"
                y2="58.16"
              />
              <polygon
                class="cls-1"
                points="264.45 7.72 272.79 7.72 274.77 0.5 266.44 0.5 263.74 0.5 259.62 0.5 251.28 0.5 249.34 7.72 235.74 58.16 233.79 65.38 242.13 65.38 248.91 65.38 257.25 65.38 259.23 58.16 250.9 58.16 248.19 58.16 244.07 58.16 242.25 58.16 248.77 34.46 254.03 36.13 254.63 33.59 255.55 29.71 250.45 28.34 256.12 7.72 257.67 7.72 264.45 7.72"
              />
              <polygon
                class="cls-1"
                points="232.12 0.5 223.78 0.5 221.84 7.72 230.17 7.72 216.28 59.27 214.63 65.38 218.4 65.38 221.11 65.38 236.96 7.72 245.29 7.72 247.28 0.5 238.94 0.5 236.24 0.5 232.12 0.5"
              />
              <polygon
                class="cls-1"
                points="137.09 65.38 140.86 65.38 143.56 65.38 161.4 0.5 158.7 0.5 154.58 0.5 140.33 53.37 126.08 0.5 111.83 53.37 97.57 0.5 93.46 0.5 90.75 0.5 108.59 65.38 112.36 65.38 115.06 65.38 126.08 25.32 137.09 65.38"
              />
              <polygon
                class="cls-1"
                points="174.88 0.5 170.76 0.5 154.92 59.27 153.27 65.38 157.04 65.38 159.75 65.38 177.58 0.5 174.88 0.5"
              />
              <polygon
                class="cls-1"
                points="166.25 65.38 170.02 65.38 172.72 65.38 183.74 25.32 194.75 65.38 198.52 65.38 201.22 65.38 219.06 0.5 216.36 0.5 212.24 0.5 197.99 53.37 183.74 0.5 169.49 53.37 166.25 65.38"
              />
              <polygon
                class="cls-1"
                points="64.63 0.5 68.74 0.5 84.58 59.27 86.23 65.38 82.46 65.38 79.76 65.38 61.92 0.5 64.63 0.5"
              />
              <path
                class="cls-1"
                d="M304.5.5H281l-.22.81-1.72,6.41-1.65,6.11L265.47,58.16l-1.94,7.22H270l8.5-30.92,5,1.59,8.06,29.33h6.47l-1.64-6.11-6.69-24.82,3.55-1,7.21-2,2-7.14,1.27-4.6L306.87,8.2Zm-9.27,25.71L283.76,29.3l-3.58-1,5.67-20.62h14l.17.55Z"
              />
              <path
                class="cls-1"
                d="M38,.51,15.41,39.56l-8-.73L6.18,42.7l-.82,2.55,6.44.55L.5,65.38H7.56l11-19,40.86,3.49,9,15.51H75.4ZM22.12,40.17,38,12.75l17.6,30.49Z"
              />
            </svg>
          </Link>
        </span>
        <span className="navbar-item">
          <Link to="/articles">Blog</Link>
        </span>
        <span className="navbar-item">
          <Link to="/projects">Projects</Link>
        </span>
        <span className="navbar-item">
          <Link to="/about">About</Link>
        </span>
        <span className="navbar-item">
          <Link to="/help">Help</Link>
        </span>
      </div>
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
