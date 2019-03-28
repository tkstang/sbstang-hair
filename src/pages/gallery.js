import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"
import styles from "styles/gallery.module.scss"

const Gallery = ({ data }) => {
  console.log(data);
  const instaPosts = data.allInstagramContent.edges.map(i => i.node);

  return (
    <Layout>
      {/** To Do: Improve SEO */}
      <SEO title="Gallery" />
      <div className={styles.gallerySection}>
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
