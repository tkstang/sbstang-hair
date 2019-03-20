import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Media } from 'react-breakpoints'

import Navigation from "components/navigation"
import Footer from "components/footer"
import styles from "styles/layout.module.scss"

const Layout = ({ children }) => {
  const [navActive, toggleNavState] = useState(false);

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <div className={styles.layoutContainer}>
            <div className={styles.navContainer}>
              <Media>
                {({ breakpoints, currentBreakpoint }) => (
                  breakpoints[currentBreakpoint] < breakpoints.lg ? (
                    <div className={`${styles.navButtonCircle} ${navActive ? styles.active : ''}`}
                      onClick={() => toggleNavState(!navActive)}>
                      <div className={`${styles.navButton} ${navActive ? styles.active : ''}`}>
                      <span className={styles.top} />
                      <span className={styles.middle} />
                      <span className={styles.bottom} />
                      </div>
                    </div>
                  ) : null
                )}
              </Media>
              <div className={`${styles.navigation} ${navActive ? styles.open : ''}`}>
                <Navigation active={navActive} />
              </div>
            </div>
            <main className={styles.content}>{children}</main>
            <div className={styles.footer}>
              <Footer />
            </div>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
