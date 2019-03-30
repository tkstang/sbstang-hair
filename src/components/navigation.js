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

  // const getFlexBasisStyle = (linkName) => {
  //   const linkWidth = links[linkName].width[0];
  //   console.log(linkName, linkWidth + 40);
  //   return {
  //     flexBasis: linkWidth + 40
  //   }
  // }

  // Once styling is set static flex basis can be used and flexBasisStyle function/use effect can be removed as well as refs for links

  return (
    <div className={`${styles.navigation} ${mobileNavActive ? styles.open : ''}`}>
      <div className={styles.socialsContainer}>
        <Socials theme={mobile ? 'dark' : 'light'} />
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.linkItem} style={{ flexBasis: 155 }}>
          <Link ref={links.clientLink.ref} to="/new-clients" className={styles.link}
            activeClassName={styles.active}>New Clients</Link>
        </div>
        <div className={styles.linkItem} style={{ flexBasis: 121 }}>
          <Link ref={links.servicesLink.ref} to="/services" className={styles.link}
            activeClassName={styles.active}>Services</Link>
        </div>
        <div className={styles.linkItem} style={{ flexBasis: 116 }}>
          <Link ref={links.galleryLink.ref} to="/gallery" className={styles.link}
            activeClassName={styles.active}>Gallery</Link>
        </div>
        <div className={styles.linkItem} style={{ flexBasis: 99 }}>
          <Link ref={links.aboutLink.ref} to="/about" className={styles.link}
            activeClassName={styles.active}>About</Link>
        </div>
        <div className={styles.linkItem} style={{ flexBasis: 119 }}>
          <Link ref={links.contactLink.ref} to="/contact" className={styles.link}
            activeClassName={styles.active}>Contact</Link>
        </div>
        <div className={styles.linkItem} style={{ flexBasis: 75 }}>
          <Link ref={links.faqLink.ref} to="/faq" className={styles.link}
            activeClassName={styles.active}>FAQ</Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation
