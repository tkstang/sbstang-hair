import React, { useEffect, useState } from 'react'
import { StaticQuery, graphql } from 'gatsby';
import { Carousel } from 'react-responsive-carousel'
import Img from "gatsby-image"
import styles from "styles/image-carousel.module.scss"
import "styles/carousel.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(
            sort: {fields: [childImageSharp___fluid___originalName], order: [ASC]},
            filter: {relativeDirectory: {eq: "carousel"}}
          ) {
            edges {
              node {
                childImageSharp {
                  fluid(quality: 90) {
                    originalName,
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => mounted && (
        <Carousel className={styles.imageCarousel} showArrows={false} showThumbs={false} interval={8000} transitionTime={2000} showStatus={false} autoPlay={true} infiniteLoop>
          {
            data.allFile.edges.map((image, i) => {
              const { fluid, fluid: { originalName } } = image.node.childImageSharp;
              return (
                <div className={styles.heroImageContainer} key={`image${i}`}>
                  <Img className={styles.image} fluid={fluid} alt={originalName}/>
                </div>
              )
            })
          }
        </Carousel>
      )}
    />)
}


export default ImageCarousel
