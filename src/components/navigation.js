import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'
import Socials from "components/socials"
import styles from "styles/navigation.module.scss"

const Navigation = props => {
  return (
    <div className={styles.navigation}>
      <div className={styles.socialsContainer}>
        <Socials theme="light" />
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.linkItem}>
          <Link className={styles.link} to="/new-clients">New Clients</Link>
        </div>
        <div className={styles.linkItem}>
          <Link className={styles.link} to="/services">Services</Link>
        </div>
        <div className={styles.linkItem}>
          <Link className={styles.link} to="/gallery">Gallery</Link>
        </div>
        <div className={styles.linkItem}>
          <Link className={styles.link} to="/about">About</Link>
        </div>
        <div className={styles.linkItem}>
          <Link className={styles.link} to="/contact">Contact</Link>
        </div>
        <div className={styles.linkItem}>
          <Link className={styles.link} to="/faq">FAQ</Link>
        </div>
      </div>
    </div>
  )
}

Navigation.propTypes = {

}

export default Navigation
