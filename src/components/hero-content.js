import React from 'react'
import PropTypes from 'prop-types'
import styles from "styles/hero-content.module.scss"
import Button from "components/button"

const HeroContent = ({ text, buttonText, buttonLink }) => {
  return (
    <div className={styles.heroContent}>
      <div className={styles.content}>
        {text}
      </div>
      <div className={styles.buttonContainer}>
        <Button buttonText={buttonText} buttonLink={buttonLink} customClass={'carousel'} />
      </div>
    </div>
  )
}

HeroContent.propTypes = {
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string
}

HeroContent.defaultProps = {
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string
}

export default HeroContent
