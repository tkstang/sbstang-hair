import React, { useState, useEffect } from 'react'
import Image from 'gatsby-image'
import PropTypes from 'prop-types'

import styles from 'styles/hero.module.scss'
import Button from 'components/button'
import ImageCarousel from 'components/image-carousel'

const Hero = ({ text, buttonText, buttonLink, image }) => {
  const [height, setHeight] = useState('100vh');

  useEffect(() => {
    const handleResize = () => {
      window.innnerHeight >= 820 ? setHeight('100vh') : setHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <div className={styles.heroContainer} style={{ height: height }}>
      {image && (
        <div className={styles.heroImageContainer}>
          <Image
            className={styles.heroImage}
            fluid={image.childImageSharp.fluid}
            alt={'hero-image'}
          />
        </div>
      )}
      {!image && (
        <ImageCarousel/>
      )}
      <div className={styles.heroContent}>
        <div className={styles.content}>
          {text}
        </div>
        <div className={styles.buttonContainer}>
          <Button buttonText={buttonText} buttonLink={buttonLink} customClass={'hero'} />
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  image: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
}

Hero.defaultProps = {
  text: '',
  buttonText: '',
  buttonLink: '',
  image: false,
}

export default Hero
