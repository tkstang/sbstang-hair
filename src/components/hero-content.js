import React from 'react'
import PropTypes from 'prop-types'
import styles from "styles/hero-content.module.scss"

const HeroContent = ({ text, buttonText, buttonLink }) => {
  return (
    <div className={styles.heroContent}>
      <div className={styles.content}>
        {text}
      </div>
      {/** Extract button to component */}
      <button className={styles.button}>
        <div className={styles.interior}>
          <div className={styles.text}>
            {buttonText}
          </div>
        </div>
      </button>
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
