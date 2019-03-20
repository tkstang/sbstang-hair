import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Media } from 'react-breakpoints'
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
          <Link ref={links.clientLink.ref} className={styles.link} to="/new-clients">New Clients</Link>
        </div>
        <div className={styles.linkItem} style={getFlexBasisStyle('servicesLink')}>
          <Link ref={links.servicesLink.ref} className={styles.link} to="/services">Services</Link>
        </div>
        <div className={styles.linkItem} style={getFlexBasisStyle('galleryLink')}>
          <Link ref={links.galleryLink.ref} className={styles.link} to="/gallery">Gallery</Link>
        </div>
        <div className={styles.linkItem} style={getFlexBasisStyle('aboutLink')}>
          <Link ref={links.aboutLink.ref} className={styles.link} to="/about">About</Link>
        </div>
        <div className={styles.linkItem} style={getFlexBasisStyle('contactLink')}>
          <Link ref={links.contactLink.ref} className={styles.link} to="/contact">Contact</Link>
        </div>
        <div className={styles.linkItem} style={getFlexBasisStyle('faqLink')}>
          <Link ref={links.faqLink.ref} className={styles.link} to="/faq">FAQ</Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
