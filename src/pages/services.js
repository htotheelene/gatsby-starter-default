import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const SecondPage = () => (
  <Layout>
    <Seo title="Services" />
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <h2>Custom Woodworking</h2>
        <p className={styles.question}>
          Need a table to fit a space? Bigger dresser?
        </p>
        <p>
          Fully customizable designs for dining and kitchen tables of all shapes and sizes,
          seating options, entertainment centers, coffee tables, end tables. Custom kitchen
          cabinets and islands, built in shelves and other storage options.
        </p>

        <p className={styles.question}>
          Do you have a home or piece that you can’t get worked on because no one can seem to
          find what they need to keep it original?
        </p>
        <p>
          Made by Wes can reproduce historic and
          antique architectural details like moulding, casing, stair rail parts, dentils,
          carvings, and turnings.
        </p>

        <h2>Repairs</h2>
        <p className={styles.question}>
          Have a piece you would like repaired or refinished? Reupholstered or just plain remade?
        </p>
        <p>
          Great Grandma’s chair can be remade for new memories!
        </p>

        <h2>Lessons</h2>
        <p className={styles.question}>
          Do you have a garage shop that you want to learn how to maximize? Hand tools that you need
          to learn to use?
        </p>
        <p>
          We can make a project together to elevate your woodworking levels and help
          you gain some insight into the craft.
        </p>
      </div>
    </div>
  </Layout>
)

export default SecondPage
