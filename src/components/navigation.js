import React from 'react'
import { Link } from 'gatsby'
import Socials from 'components/socials'
import styles from 'styles/navigation.module.scss'

const Navigation = ({ mobileNavActive, mobile, location }) => {
  return (
    <div className={`${styles.navigation} ${mobileNavActive ? styles.open : ''}`}>
      <div className={styles.socialsContainer}>
        <Socials theme={mobile ? 'dark' : 'light'} />
      </div>
      <div className={styles.linksContainer}>
        <div className={`${styles.linkItem} ${styles.newClients}`}>
            <Link to="/new-clients" className={styles.link}
              activeClassName={styles.active}>
              <div className={styles.linkContainer}>
                New Clients
              </div>
            </Link>
            {location.pathname.includes('new-clients')}
        </div>
        <div className={`${styles.linkItem} ${styles.services}`}>
          <div className={styles.linkContainer}>
            <Link to="/services" className={styles.link}
              activeClassName={styles.active}>
              <div className={styles.linkContainer}>
                Services
              </div>
            </Link>
            {location.pathname.includes('services')}
          </div>
        </div>
        <div className={`${styles.linkItem} ${styles.gallery}`}>
          <div className={styles.linkContainer}>
            <Link to="/gallery" className={styles.link}
              activeClassName={styles.active}>
              <div className={styles.linkContainer}>
                Gallery
              </div>
            </Link>
            {location.pathname.includes('gallery')}
          </div>
        </div>
        <div className={`${styles.linkItem} ${styles.about}`}>
          <div className={styles.linkContainer}>
            <Link to="/about" className={styles.link}
              activeClassName={styles.active}>
              <div className={styles.linkContainer}>
                About
              </div>
            </Link>
            {location.pathname.includes('about')}
          </div>
        </div>
        <div className={`${styles.linkItem} ${styles.contact}`}>
          <div className={styles.linkContainer}>
            <Link to="/contact" className={styles.link}
              activeClassName={styles.active}>
              <div className={styles.linkContainer}>
                Contact
              </div>
            </Link>
            {location.pathname.includes('contact')}
          </div>
        </div>
        <div className={`${styles.linkItem} ${styles.faq}`}>
          <div className={styles.linkContainer}>
            <Link to="/faq" className={styles.link}
              activeClassName={styles.active}>
              <div className={styles.linkContainer}>
                FAQ
              </div>
            </Link>
            {location.pathname.includes('faq')}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Navigation
