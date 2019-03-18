import React from "react"
import Socials from "components/socials"
import styles from "styles/footer.module.scss"


const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.copyright}>
      Copyright. All rights reserved.
    </div>
    <Socials theme="dark" />
  </footer>
)

export default Footer
