import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "About Wes",
    url: "about",
    description: "Learn about @made_by_wes"
  },
  {
    text: "Services",
    url: "services",
    description: "What can @made_by_wes do for you"
  },
  {
    text: "Portfolio",
    url: "https://www.instagram.com/made_by_wes/",
    description:
      "Check out @made_by_wes projects on Instagram!",
  },
]

const img0 = "../images/wes_pf.png"
const img2 = "../images/wes_drawer.png"
const img1 = "../images/wes_floor.png"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ul className={styles.list}>
      {links.map((link, index) => (
        <li style={{ listStyle: `none`}} key={link.url}>
          <a href={`${link.url}`} className={styles.listItem}>
            {index === 0 && (
              <StaticImage
                src={img0}
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{
                  minWidth: `310px`,
                  // maxWidth: `400px`,
                  flex: 1,
                }}
              />
            )}
            {index === 1 && (
              <StaticImage
                src={img1}
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{
                  minWidth: `310px`,
                  // maxWidth: `400px`,
                  flex: 1,
                }}
              />
            )}
            {index === 2 && (
              <StaticImage
                src={img2}
                loading="eager"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{
                  minWidth: `310px`,
                  // maxWidth: `400px`,
                  flex: 1,
                }}
              />
            )}
            <div
              style={{
                maxWidth: `320px`,
                textAlign: `center`,
                backgroundColor: `rgba(255, 255, 255, 0.7)`,
                padding: `0`,
                fontSize: `60px`,
                textTransform: `lowercase`,
                color: `#646464`
              }}
            >
                {link.text}
            </div>
          </a>
          <p
            style={{
              textAlign: `center`,
              textDecoration: `none`,
              paddingBottom: `12px`
            }}
          >
            {link.description}
          </p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
