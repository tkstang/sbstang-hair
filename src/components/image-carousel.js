import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import PropTypes from 'prop-types'
import styles from "styles/image-carousel.module.scss"
import "styles/carousel.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import wedding1 from "../images/leal-wedding-01.jpg"
import image2 from "../images/umbrella-2.jpg"
import image3 from "../images/umbrella-3.jpg"
import image7 from "../images/umbrella-7.jpg"

const ImageCarousel = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  })

  return (
    mounted &&
    <Carousel className={styles.imageCarousel} showArrows={false} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop>
      {
        [wedding1, image2, image3, image7].map((image, i) => {
          return (
            <div className={styles.heroImageContainer} key={`image${i}`}>
              <img className={styles.image} src={image} alt={'hero'}/>
            </div>
          )
        })
      }
    </Carousel>
  )
}


export default ImageCarousel
