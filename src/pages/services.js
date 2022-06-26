import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const SecondPage = () => (
  <Layout>
    <Seo title="Services" />
    <div className={styles.about}>
      <h2>Custom Furniture</h2>
      <p>Wes can build stuff!</p>

      <h2>Repairs</h2>
      <p>Wes can repair stuff!</p>

      <h2>Lessons</h2>
      <p>Wes can teach stuff!</p>
    </div>
  </Layout>
)

export default SecondPage
