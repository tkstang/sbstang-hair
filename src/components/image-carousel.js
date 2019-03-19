import React from 'react'
import PropTypes from 'prop-types'
import styles from "styles/image-carousel.module.scss"
import "styles/carousel.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = ({ imageLinks, autoPlay }) => {
  return (
    <Carousel className={styles.imageCarousel} showArrows={false} showThumbs={false} showStatus={false} autoPlay={autoPlay} infiniteLoop>
      {
        imageLinks.map((imageLink, i) => {
          return (
            <div className={styles.imageContainer} key={`image${i}`}>
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
