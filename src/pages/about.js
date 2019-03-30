import React from "react"
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "components/layout"
import HeroContent from "components/hero-content"
import SEO from "components/seo"
import styles from "styles/about.module.scss"

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
          buttonLink={'mailto:sbstanghair@gmail.com?subject=Inquiry from sbstanghair.com'}
          text={`I'm going to make everything around me beautiful.  That will be my life. - Elise De Wolfe`}
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.introSection}>
          <div className={styles.sectionHeader}>
            About Me
            <div className={styles.sectionLine} />
          </div>
          <p>
            My love of hair and beauty was ignited at the young age of 16 when I began working in a Salon near my childhood home in the Bay Area. My curiosity in the industry continued to grow throughout my time in college where I worked at upscale salons near school. Upon graduation, I decided to follow my passion and get my  cosmetology license.
          </p>
          <p>
          In January of 2012 I was fortunate enough to land an apprenticeship with the talented team at Umbrella Salon. I began my training under Kien Hoang, Director of Training and Content for Oribe Haircare and Global Educator for Oribe, Christian Ceja-Compin. Together, my mentor Kien and the wonderful team at Umbrella, exposed me to some of the best education the industry had to offer, really allowing my abilities in cut, color and styling to flourish. Once on the floor, I began taking clients of my own and continued to grow through experience and further education.
          </p>
          <p>
          Education is something I am very passionate about. I find that it is crucial in staying informed on the most current and up to date techniques to not only provide the best service for my clients, but also for the furtherment of my career.  Most importantly though, I feel education is what keeps me inspired and I love sharing that with each and every client I have the pleasure of providing services to.
          </p>
        </div>
        <div className={styles.achievementsSection}>
          <div className={styles.educationSection}>
            <div className={styles.sectionHeader}>
              Education / Honors
              <div className={styles.sectionLine} />
            </div>
            <ul>
              <li>Wella Master Color Expert</li>
              <li>Hairdreams Extension Certified</li>
              <li>Vidal sassoon cutting and color certification</li>
              <li>901 all about blondes class</li>
              <li>Oribe on the road 2013, 2014, 2017</li>
              <li>Oribe The Unstructured Bob</li>
              <li>Oribe The Internal Layer</li>
              <li>Oribe The Modern Shag</li>
            </ul>
          </div>
          <div className={styles.showsSection}>
          <div className={styles.sectionHeader}>
              Shows
              <div className={styles.sectionLine} />
            </div>
            <ul>
              <li>Assisted 2018 Jeremy Scott for Moschino show LA: Key hair Oribe Canales</li>
              <li>
                Assisting at 2015 NYFW Fall/Winter
                <ul className={styles.secondaryList}>
                  <li>The Blondes: Key hair Kien Hoang</li>
                  <li>Gabriella Cadena: Key hair Tomo Jidai</li>
                  <li>Park Choo Moo: Key hair Kien Hoang</li>
                  <li>Veronica Beard: Key hair Kien Hoang</li>
                  <li>Chromat: Key hair Amy Farid</li>
                  <li>Chapter: Key hair Christian Ceja- Compin</li>
                  <li>Garcia Vales: Key hair Louis Orozco</li>
                </ul>
              </li>
              <li>2015 Modern Bridal Fashion Show
                <ul className={`${styles.secondaryList} ${styles.location}`}>
                  <li>San Francisco</li>
                </ul>
              </li>
              <li>2014 Modern Bridal Fashion Show
                <ul className={`${styles.secondaryList} ${styles.location}`}>
                  <li>San Francisco</li>
                </ul>
              </li>
            </ul>
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