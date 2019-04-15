import React, { useState, useEffect } from 'react'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import Media from 'react-media'
import Layout from 'components/layout'
import SEO from 'components/seo'
import styles from 'styles/gallery.module.scss'

const Gallery = ({ data }) => {
  const instaPosts = data.allInstagramContent.edges.map(i => i.node);
  // To Do: Add more interactivity with posts? show comments, tags, etc?

  const [mobile, setMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  return (
    <Layout>
      <Media query="(max-width: 575px)">
        {(matches) => {
          setMobile(matches && mounted);
          return null;
        }}
      </Media>
      {/** To Do: Improve SEO */}
      <SEO title="Gallery" />
      <div className={styles.gallerySection}>
        <div className={styles.outerContainer}>
          <div className={styles.galleryContainer}>
            {
              instaPosts.map((post, i) => {
                return (
                  post.localImage ?
                    <Image className={styles.instaImage} key={i} fluid={post.localImage.childImageSharp.fluid}/>
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
