import React from 'react'
import Image from 'gatsby-image'

import styles from 'styles/index.module.scss'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Hero from 'components/hero'
import Testimonials from 'components/testimonials'
import SectionHeader from 'components/section-header'
import Button from 'components/button'
import { graphql } from 'gatsby'
import { FaInstagram } from 'react-icons/fa'

const IndexPage = ({ data }) => {
  const instaPosts = data.allInstagramContent.edges.map(i => i.node);

  return (
    <Layout>
      <SEO title="Home" keywords={[]} />
      <Hero buttonText={'New Clients'}
          buttonLink={'/new-clients'}
          text={'Great hair doesn\'t happen by chance.  It happens by appointment.'}
      />
      <div className={styles.contentContainer}>
        <div className={styles.testimonialSection}>
          <Testimonials />
        </div>
        <div className={styles.followSection}>
          <div className={styles.imageContainer}>
            {
              instaPosts.slice(0,8).map((post, i) => {
                return (
                  post.localImage ? <Image className={styles.instaImage} fluid={post.localImage.childImageSharp.fluid} key={i} alt={post.user.username} />  : <div></div>
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
          <SectionHeader text={'book an appointment'} />
          Click the button below to visit the booking page for Umbrella Salon.  Simply select my name and your desired service to browse availability and book an appointment!
          <div className={styles.buttonContainer}>
            <Button width={'250px'} buttonText={'Book Now'} buttonLink={'https://www.umbrellasalon.com/book-online/'} />
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
          user {
            username
          }
          localImage{
            childImageSharp {
              fluid(maxHeight: 500, maxWidth: 500 quality: 90) {
                originalName,
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
