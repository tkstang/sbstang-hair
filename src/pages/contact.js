import React from "react"
import { FaInstagram, FaFacebookF, FaEnvelope, FaPhone, FaCut } from "react-icons/fa"
import Layout from "components/layout"
import SEO from "components/seo"
import styles from "styles/contact.module.scss"

const Contact = () => (
  <Layout>
    {/** To Do: Improve SEO */}
    <SEO title="Contact" />
    <div className={styles.contactSection}>
      <div className={styles.sectionHeader}>
        Get In Touch
        <div className={styles.sectionLine} />
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactItem}>
          <a href="tel:+01-408-293-4242">
            <FaPhone className={styles.icon} />
          </a>
        </div>
        <div className={styles.contactItem}>
          <a href="mailto:sbstanghair@gmail.com?subject=Inquiry from sbstanghair.com">
            <FaEnvelope className={styles.icon} />
          </a>
        </div>
        <div className={styles.contactItem}>

        </div>
        <div className={styles.contactItem}>
          <a href="https://www.facebook.com/sbstanghair/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className={`${styles.icon} ${styles.facebook}`}/>
          </a>
          <a href="https://www.instagram.com/sbstanghair/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={`${styles.icon} ${styles.instagram}`}/>
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
