import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../components/index.module.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      height: `240px`,
      width: `100%`,
      padding: `0`,
      backgroundColor: `#cccccc`,
      position: `relative`,
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      color: `#ffffff`,
    }}
  >
    <StaticImage
      src="../images/wood_background2.jpg"
      loading="eager"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
      style={{
        position: `absolute`,
        height: `100%`,
        top: `0`,
        left: `0`,
        right: `0`,
        bottom: `0`,
      }}
    />
    <div
      style={{
        position: `relative`,
        textAlign: `center`,
        marginTop: `-37px`
      }}
    >
      <h1 className={styles.homeLink}>
        <a
          style={{
            textUnderlineOffset: `unset`,
            color: `white`,
            textTransform: `none`,
            letterSpacing: `-20px`,
            textDecoration: `underline`
          }}
          href={`/`}
        >
          {siteTitle}
        </a>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
