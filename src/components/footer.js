import React from "react"
import PropTypes from 'prop-types'
import Socials from "components/socials"
import styles from "styles/footer.module.scss"

const Footer = ({ sticky }) => (
  <footer className={`${styles.footer} ${sticky ? styles['sticky'] : ''}`}>
    <div className={styles.copyright}>
      Copyright. All rights reserved.
    </div>
    <Socials theme="dark" />
  </footer>
)

Footer.propTypes = {
  sticky: PropTypes.bool,
}

Footer.defaultProps = {
  sticky: false
}

export default Footer
