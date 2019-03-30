import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from 'styles/button.module.scss'

const Button = ({ buttonText, buttonLink, width, customClass }) => {
  const internalLink = buttonLink.charAt(0) === '/' ? true : false;

  const button = (
    <button className={`${styles.button} ${customClass ? styles[customClass] : ''}`}
      style={ width ? { width: width }  : {} }>
      <div className={styles.interior}>
        <div className={styles.text}>
          {buttonText}
        </div>
      </div>
    </button>
  )

  return internalLink ? (
    <Link to={buttonLink}>
      {button}
    </Link>
  ) : (
    <a href={buttonLink} target="_blank" rel="noopener noreferrer">
      {button}
    </a>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  customClass: PropTypes.string,
  width: PropTypes.string
}

Button.defaultProps = {
  buttonText: '',
  buttonLink: '',
  customClass: '',
  width: ''
}

export default Button
