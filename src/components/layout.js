import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import Media from 'react-media'

import Navigation from 'components/navigation'
import Footer from 'components/footer'
import styles from 'styles/layout.module.scss'

const Layout = ({ children, stickyFooter }) => {
  const [navActive, toggleNavState] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  const getLogoClass = () => !mobile ? '' : navActive ? styles.hide : styles.show;

  return (
    <div className={styles.layoutContainer}>
      <Link to="/">
        <div className={`${styles.logo} ${getLogoClass()}`}>
          <div className={styles.logoText}>Samantha</div>
          <div className={styles.logoLine} />
          <div className={styles.logoText}>Stang</div>
          <div className={styles.logoLine} />
        </div>
      </Link>
      <div className={styles.navContainer}>
        <Media query="(max-width: 991px)">
          {(matches) => {
            if (mounted) {
              if (matches) {
                setMobile(true);

                return (
                  <div className={`${styles.navButtonCircle} ${navActive ? styles.active : ''}`}
                  onClick={() => toggleNavState(!navActive)}>
                  <div className={`${styles.navButton} ${navActive ? styles.active : ''}`}>
                  <span className={styles.top} />
                  <span className={styles.middle} />
                  <span className={styles.bottom} />
                  </div>
                </div>
                )
              } else {
                setMobile(false);
                return null;
              }
            } else {
              return null;
            }
          }}
        </Media>
        <div className={`${styles.navigation} ${navActive ? styles.open : ''}`}>
          <Location>
            {({ location }) => (
              <Navigation mobileNavActive={navActive} mobile={mobile} location={location} />
            )}

          </Location>
        </div>
      </div>
      <main className={styles.content}>{children}</main>
      <div className={styles.footer}>
        <Footer sticky={stickyFooter}/>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  stickyFooter: PropTypes.bool,
}

Layout.defaultProps = {
  stickyFooter: false
}

export default Layout
