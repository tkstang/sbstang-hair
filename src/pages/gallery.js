import React from 'react'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from 'components/layout'
import SEO from 'components/seo'
import styles from 'styles/gallery.module.scss'

const Gallery = ({ data }) => {
  const instaPosts = data.allInstagramContent.edges.map(i => i.node);
  // TODO: Add more interactivity with posts? show comments, tags, etc?

  return (
    <Layout>
      {/** TODO: Improve SEO */}
      <SEO title="Gallery" />
      <div className={styles.gallerySection}>
        <div className={styles.outerContainer}>
          <div className={styles.galleryContainer}>
            {
              instaPosts.map((post, i) => {
                return (
                  post.localImage ?
                    <Image className={styles.instaImage} alt={post.user.username} key={i} fluid={post.localImage.childImageSharp.fluid}/>
                    : null
                )
              })
            }
          </div>
        </div>
        <div className={styles.footBlock}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GalleryInstagramPosts {
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

export default Gallery
