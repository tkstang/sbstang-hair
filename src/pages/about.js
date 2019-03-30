import React from "react"
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "components/layout"
import HeroContent from "components/hero-content"
import SEO from "components/seo"
import styles from "styles/about.module.scss"

import wedding1 from "../images/leal-wedding-01.jpg"

const About = ({ data }) => (
  <Layout>
    {/** To Do: Improve SEO */}
    <SEO title="About" />
    <div className={styles.aboutSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroImageContainer}>
          <Image
            className={styles.heroImage}
            fluid={data.imageOne.childImageSharp.fluid}
            alt={'about'}
          />
        </div>
        <HeroContent buttonText={'Get In Touch'}
          buttonLink={'/mailto:sbstanghair@gmail.com?subject=Inquiry from sbstanghair.com'}
          text={`I'm going to make everything around me beautiful.  That will be my life. - Elise De Wolfe`}
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.introSection}>
          <div className={styles.sectionHeader}>
            About Me
            <div className={styles.sectionLine} />
          </div>
        </div>
        <div className={styles.achievementsSection}>
          <div className={styles.educationSection}>

          </div>
          <div className={styles.showsSection}>

          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default About

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "leal-wedding-01.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
