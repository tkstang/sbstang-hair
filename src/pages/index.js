import React from "react"
import { Link } from "gatsby"
import wedding1 from "../images/leal-wedding-01.jpg"
import image2 from "../images/umbrella-2.jpg"
import image3 from "../images/umbrella-3.jpg"
import image7 from "../images/umbrella-7.jpg"
import styles from "styles/index.module.scss"

import Layout from "components/layout"
import SEO from "components/seo"
import ImageCarousel from "components/image-carousel"
import HeroContent from "components/hero-content"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={styles.heroContainer}>
      <ImageCarousel
        autoPlay={true}
        imageLinks={[
          wedding1,
          image2,
          image3,
          image7,
        ]}
      />
      <HeroContent buttonText={'New Clients'}
        // Add button link
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lobore'}
      />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
