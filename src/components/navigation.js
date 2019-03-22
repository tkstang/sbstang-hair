import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Socials from 'components/socials'
import styles from 'styles/navigation.module.scss'

const Navigation = ({ mobileNavActive, mobile }) => {
  const links = {
    clientLink: {
      ref: useRef(null),
      width: useState(0)
    },
    servicesLink: {
      ref: useRef(null),
      width: useState(0)
    },
    galleryLink: {
      ref: useRef(null),
      width: useState(0)
    },
    aboutLink: {
      ref: useRef(null),
      width: useState(0)
    },
    contactLink: {
      ref: useRef(null),
      width: useState(0)
    },
    faqLink: {
      ref: useRef(null),
      width: useState(0)
    }
  }

  useEffect(() => {
    Object.values(links).forEach((value) => {
      const setWidth = value.width[1];
      setWidth(value.ref.current.clientWidth);
    }, [])
  });

  const getFlexBasisStyle = (linkName) => {
    const linkWidth = links[linkName].width[0];

    return {
      flexBasis: linkWidth + 40
    }
  }

  return (
    <div className={`${styles.navigation} ${mobileNavActive ? styles.open : ''}`}>
      <div className={styles.socialsContainer}>
        <Socials theme={mobile ? 'dark' : 'light'} />
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.linkItem} style={getFlexBasisStyle('clientLink')}>
          <Link ref={links.clientLink.ref} to="/new-clients" className={styles.link}
            activeClassName={styles.active}>New Clients</Link>
        </div>
        <div className={styles.linkItem} style={getFlexBasisStyle('servicesLink')}>
          <Link ref={links.servicesLink.ref} to="/services" className={styles.link}
            activeClassName={styles.active}>Services</Link>
        </div>
        <div className={styles.linkItem} style={getFlexBasisStyle('galleryLink')}>
          <Link ref={links.galleryLink.ref} to="/gallery" className={styles.link}
            activeClassName={styles.active}>Gallery</Link>
        </div>
        <div className={styles.linkItem} style={getFlexBasisStyle('aboutLink')}>
          <Link ref={links.aboutLink.ref} to="/about" className={styles.link}
            activeClassName={styles.active}>About</Link>
        </div>
        <div className={styles.linkItem} style={getFlexBasisStyle('contactLink')}>
          <Link ref={links.contactLink.ref} to="/contact" className={styles.link}
            activeClassName={styles.active}>Contact</Link>
        </div>
        <div className={styles.linkItem} style={getFlexBasisStyle('faqLink')}>
          <Link ref={links.faqLink.ref} to="/faq" className={styles.link}
            activeClassName={styles.active}>FAQ</Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
