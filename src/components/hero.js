import React from 'react'
import Image from 'gatsby-image'
import PropTypes from 'prop-types'

import styles from 'styles/hero.module.scss'
import Button from 'components/button'
import ImageCarousel from 'components/image-carousel'

const Hero = ({ text, contentSize, buttonText, buttonLink, image, altText }) => {
  return (
    <div className={styles.heroContainer}>
      {image && (
        <div className={styles.heroImageContainer}>
          <Image
            className={styles.heroImage}
            fluid={image.childImageSharp.fluid}
            alt={altText ? altText : 'Hair by Samantha Stang'}
          />
        </div>
      )}
      {!image && (
        <ImageCarousel/>
      )}
      <div className={styles.heroContent}>
        <div className={`${styles.content} ${contentSize ? styles[contentSize] : ''}`}>
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
  contentSize: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  image: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
  altText: PropTypes.string
}

Hero.defaultProps = {
  text: '',
  contentSize: null,
  buttonText: '',
  buttonLink: '',
  image: false,
  altText: null
}

export default Hero
