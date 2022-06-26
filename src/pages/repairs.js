import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const SecondPage = () => (
  <Layout>
    <Seo title="Repairs" />
    <h1>Repairs</h1>
    <div className={styles.about}>
      <div>
        <p>
          Wes Lillig repairs your chairs and more!
        </p>
      </div>
    </div>
  </Layout>
)

export default SecondPage
