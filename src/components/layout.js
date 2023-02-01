/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

import Header from "./header"
import "./layout.css"
import * as styles from "../components/index.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={"Made By Wes"} />
      <div>
        <main
          style={{
            padding: `var(--size-gutter)`,
            paddingBottom: 0
          }}
        >
          {children}
        </main>
        <footer
          style={{
            margin: `0 auto`,
            height: `150px`,
            width: `100%`,
            padding: `0`,
            backgroundColor: `#cccccc`,
            position: `relative`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            color: `#ffffff`,
            marginTop: `70px`
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
              position: `absolute`,
              textAlign: `center`,
              paddingLeft: `10px`,
              paddingRight: `10px`
            }}
          >
            <div>
              <h2 className={styles.introContainer__contact_headerTitle}>
                Contact me
              </h2>
              <p className={styles.introContainer__contact_headerText}>
                Available for Commissions! Please contact with inquiries.
              </p>
            </div>
            <ul className={styles.introContainer__contact}>
              <li className={styles.introContainer__contact__item} style={{ padding: 0 }}>
                <a 
                  href="mailto:weslillig@gmail.com"
                  style={{
                    marginTop: `-4px`,
                    display: `block`
                }}>
                  weslillig@gmail.com
                </a>
              </li>
              <li className={styles.introContainer__contact__item}>
                <a href="tel:1-816-686-6603">(816)686-6603</a>
              </li>
              <li className={styles.introContainer__contact__item}>
                <a
                  href="https://www.instagram.com/made_by_wes/"
                  style={{
                    marginTop: `-2px`,
                    display: `block`
                }}>  
                  @made_by_wes
                </a>
              </li>
            </ul>
          </div>
          © {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
