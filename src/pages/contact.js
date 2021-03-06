import React from "react"
import { FaInstagram, FaFacebookF, FaEnvelope, FaPhone } from "react-icons/fa"
import { GiScissors } from 'react-icons/gi'
import Layout from "components/layout"
import SectionHeader from 'components/section-header'
import SEO from "components/seo"
import styles from "styles/contact.module.scss"

const Contact = () => (
  <Layout>
    {/** TODO: Improve SEO */}
    <SEO title="Contact" />
    <div className={styles.contactSection}>
      <SectionHeader text={'get in touch'} />
      <div className={styles.contactContainer}>
        <div className={styles.contactItem}>
          <div className={styles.contactLink}>
            <a href="tel:+01-408-293-4242">
              <FaPhone className={styles.icon} />
              408-293-4242
            </a>
          </div>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactLink}>
            <a href="mailto:sbstanghair@gmail.com?subject=Inquiry from sbstanghair.com">
              <FaEnvelope className={styles.icon} />
              <div className={styles.email}>
                <span>
                sbstanghair
                </span>
                <span>
                @gmail.com
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactLink}>
            <a href="https://maps.google.com/?q=Umbrella Salon, 2 N Market St #100, San Jose, CA 95113" target="_blank" rel="noopener noreferrer">
                <GiScissors className={styles.icon} />
                <span>2 N Market St #100</span>
                <span>San Jose, CA 95113</span>
            </a>
          </div>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactLink}>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/sbstanghair/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className={`${styles.icon} ${styles.facebook}`}/>
              </a>
              <a href="https://www.instagram.com/sbstanghair/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={`${styles.icon} ${styles.instagram}`}/>
              </a>
            </div>
            <div className={styles.handle}>@sbstanghair</div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
