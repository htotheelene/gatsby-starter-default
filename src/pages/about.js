import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const SecondPage = () => (
  <Layout>
    <Seo title="About" />
    <div className={styles.about}>
      <h2>A Pursuit of Quality Craftsmanship</h2>
      <p>
        In 2014 Wes moved from Kansas City to Boston to study Cabinetry &
        Furniture at the North Bennet Street School. Specializing in building
        furniture from the 18th and 19th Century he received the Ddora Foundation
        for “excellence in preserving American Craftsmanship”; graduating in 2016.
      </p>

      <h2>Professional Cabinetry and Furniture Maker</h2>
      <p>
        Since 2017 Wes has worked out of The Charlestown Furniture Makers Co-Op.
        Designing and building installations and free-standing furniture for
        businesses and homes; including furnishing restaurants and bars, kitchen
        cabinets and counters, dining tables, end tables, and even a custom 
        terrarium for exotic pets! 
      </p>

      <h2>Hobbyist at Heart</h2>
      <p>
        In his free time, Wes enjoys picking up new crafts like leather
        working and rug tufting. He also finds time for rugby, running,
        cooking, and tending to his bonsai and ever-growing collection
        of plants.
      </p>
    </div>
  </Layout>
)

export default SecondPage
