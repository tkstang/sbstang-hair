import React from "react"
import Image from 'gatsby-image'

import wedding1 from "../images/leal-wedding-01.jpg"
import image2 from "../images/umbrella-2.jpg"
import image3 from "../images/umbrella-3.jpg"
import image7 from "../images/umbrella-7.jpg"
import styles from "styles/index.module.scss"

import Layout from "components/layout"
import SEO from "components/seo"
import ImageCarousel from "components/image-carousel"
import HeroContent from "components/hero-content"
import Testimonials from "components/testimonials"
import Button from "components/button"
import { graphql } from 'gatsby'
import { FaInstagram } from "react-icons/fa"

const IndexPage = ({ data }) => {
  console.log(data);
  const instaPosts = data.allInstagramContent.edges.map(i => i.node);

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className={styles.heroContainer}>
        <ImageCarousel
          // autoPlay={true}
          imageLinks={[
            wedding1,
            image2,
            image3,
            image7,
          ]}
        />
        <HeroContent buttonText={'New Clients'}
          buttonLink={'/new-clients'}
          // Add button link
          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lobore'}
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.testimonialSection}>
          <Testimonials />
        </div>
        <div className={styles.followSection}>
          <div className={styles.imageContainer}>
            {
              instaPosts.slice(0,8).map((post, i) => {
                console.log(post.localImage)
                return (
                  post.localImage ? <Image className={styles.instaImage} fluid={post.localImage.childImageSharp.fluid} key={i} />  : <div></div>
                )
              })
            }
          </div>
          <div className={styles.followContainer}>
            <a href="https://www.instagram.com/sbstanghair/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={`${styles.icon} ${styles.instagram}`}/>
              <div className={styles.followText}>Follow me on instagram</div>
              <div className={styles.handle}>@sbstanghair</div>
            </a>
          </div>
        </div>
        <div className={styles.bookingSection}>
          <div className={styles.sectionHeader}>
            Book An Appointment
            <div className={styles.sectionLine} />
          </div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
          <div className={styles.buttonContainer}>
            <Button buttonText={'Book Now'} buttonLink={'https://www.umbrellasalon.com/book-online/'} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query InstagramPosts {
    allInstagramContent {
      edges {
        node {
          link
          caption {
            text
          }
          localImage{
            childImageSharp {
              fluid(maxHeight: 500, maxWidth: 500 quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          images {
            standard_resolution {
              width
              height
              url
            }
            low_resolution{
              url
            }
          }
        }
      }
    }
  }
`

export default IndexPage
