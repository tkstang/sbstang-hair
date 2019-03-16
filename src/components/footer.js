import React from "react";
import styles from "styles/footer.module.scss";
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.copyright}>
      Copyright. All rights reserved.
    </div>
    <div className={styles.socials}>
      <a href="http://www.facebook.com" target="_blank">
        <FaFacebookF className={styles.facebook}/>
      </a>
      <a href="http://www.instagram.com" target="_blank">
        <FaInstagram className={styles.instagram}/>
      </a>
    </div>
  </footer>
)

export default Footer;
