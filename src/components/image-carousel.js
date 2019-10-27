import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from "styles/image-carousel.module.scss"
import "styles/carousel.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import wedding1 from "../images/leal-wedding-01.jpg"
import jennHairspray from "../images/jenn-hairspray.jpg"
import octShoot3 from "../images/oct-shoot-3.jpg"
import octShoot6 from "../images/oct-shoot-6.jpg"
import octShoot24 from "../images/oct-shoot2-4.jpg"
import octShoot25 from "../images/oct-shoot2-5.jpg"

const ImageCarousel = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  })

  return (
    mounted &&
    <Carousel className={styles.imageCarousel} showArrows={false} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop>
      {
        [jennHairspray, octShoot24, octShoot6, wedding1, octShoot3].map((image, i) => {
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
