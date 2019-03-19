import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import styles from "styles/button.module.scss"

const Button = ({ buttonText, buttonLink }) => {
  console.log(buttonLink);
  const internalLink = buttonLink.charAt(0) === '/' ? true : false;

  const button = (
    <button className={styles.button}>
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
  buttonLink: PropTypes.string
}

Button.propTypes = {
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string
}

export default Button
