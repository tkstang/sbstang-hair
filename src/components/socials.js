import React from 'react'
import PropTypes from 'prop-types'
import styles from "styles/socials.module.scss"
import { FaInstagram, FaFacebookF } from "react-icons/fa"

const Socials = ({ theme }) => (
  <div className={`${styles.socials} ${styles[theme]}`}>
    <a href="https://www.facebook.com/sbstanghair/" target="_blank" rel="noopener noreferrer">
      <FaFacebookF className={`${styles.icon} ${styles.facebook}`}/>
    </a>
    <a href="https://www.instagram.com/sbstanghair/" target="_blank" rel="noopener noreferrer">
      <FaInstagram className={`${styles.icon} ${styles.instagram}`}/>
    </a>
  </div>
)

Socials.propTypes = {
  theme: PropTypes.string
}

Socials.defaultProps = {
  theme: `light`
}

export default Socials

