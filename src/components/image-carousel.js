import React from 'react'
import PropTypes from 'prop-types'
import styles from "styles/image-carousel.module.scss"
import "styles/carousel.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";

const { Carousel } = typeof window !== `undefined` ? require('react-responsive-carousel') : { Carousel: null }

const ImageCarousel = ({ imageLinks, autoPlay }) => {
  return (
    Carousel && <Carousel className={styles.imageCarousel} showArrows={false} showThumbs={false} showStatus={false} autoPlay={autoPlay} infiniteLoop>
      {
        imageLinks.map((imageLink, i) => {
          return (
            <div className={styles.heroImageContainer} key={`image${i}`}>
              <img className={styles.image} src={imageLink} alt={'hero'}/>
            </div>
          )
        })
      }
    </Carousel>
  )
}

ImageCarousel.propTypes = {
  imageLinks: PropTypes.array
}

ImageCarousel.defaultProps = {
  imageLinks: []
}

export default ImageCarousel
