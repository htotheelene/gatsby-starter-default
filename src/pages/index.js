import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "About me",
    url: "about",
    description:
      "Like who am I?",
    imgSrc: "../images/windsor_chair.png"
  },
  {
    text: "Portfolio",
    url: "https://www.instagram.com/made_by_wes/",
    description:
      "Check out some of my projects on Instagram! Follow me @made_by_wes",
    imgSrc: "../images/windsor_chair.png"
  },
  {
    text: "Repairs",
    url: "repairs",
    description:
      "I do repairs!",
    imgSrc: "../images/windsor_chair.png"
  }
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
            <StaticImage
              src={"../images/windsor_chair.png"}
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{
                minWidth: `310px`,
                flex: 1
              }}
            />
            <div
              style={{
                position: `absolute`,
                maxWidth: `320px`,
                textAlign: `center`,
                backgroundColor: `rgba(255, 255, 255, 0.7)`,
                padding: `15px`
              }}
            >
              <a
                className={styles.listItemLink}
                href={`${link.url}${utmParameters}`}
              >
                {link.text} ↗
              </a>
              <p className={styles.listItemDescription}>{link.description}</p>
          </div>
        </li>
      ))}
    </ul>
    <div className={styles.bottomMain}>
      <div
        className={styles.bottomImgBox}
      >
        <StaticImage
          src="../images/wes_pf.png"
          loading="eager"
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{
            minWidth: `310px`,
            flex: 1,
          }}
        />
        <div className={styles.introContainer}>
          <ul className={styles.introContainer__list}>
            <li>I believe that hand made furniture is something everyone should own and be proud of.</li>
            <li>I believe that everyone has a style and look that are unique to them.</li>
            <li>I believe that I can help bring that to life through the furniture you surround yourself with.</li>
          </ul>
      </div>
      </div>  
    </div>
  </Layout>
)

export default IndexPage
