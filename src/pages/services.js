import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"
import styles from "styles/services.module.scss"

const Services = () => (
  <Layout>
    {/** TODO: Improve SEO */}
    <SEO title="Services" />
    <div className={styles.servicesSection}>
      <div className={styles.pricingSection}>
        <div className={styles.pricingContainer}>
          <div className={styles.servicesContainer}>
            <div className={styles.servicesItem}>
              <div className={styles.sectionHeader}>
                Cut
                <div className={styles.sectionLine} />
              </div>
              <div className={styles.service}>
                <li className={styles.serviceName}>Women's Cut</li>
                <span className={styles.price}>$110</span>
              </div>
              <div className={styles.service}>
                <li className={styles.serviceName}>Men's Cut</li>
                <span className={styles.price}>$85</span>
              </div>
            </div>
            <div className={styles.servicesItem}>
              <div className={styles.sectionHeader}>
                Color
                <div className={styles.sectionLine} />
              </div>
              <div className={styles.service}>
                <li className={styles.serviceName}>Tint</li>
                <span className={styles.price}>$120+</span>
              </div>
              <div className={styles.service}>
                <li className={styles.serviceName}>Gloss/Semi Permanent</li>
                <span className={styles.price}>$85+</span>
              </div>
              <div className={styles.service}>
                <li className={styles.serviceName}>Highlight</li>
                <span className={styles.price}>$275+</span>
              </div>
              <div className={styles.service}>
                <li className={styles.serviceName}>Balayage</li>
                <span className={styles.price}>$275+</span>
              </div>
            </div>
          </div>
          <div className={styles.servicesContainer}>
            <div className={styles.servicesItem}>
              <div className={styles.sectionHeader}>
                Specialty
                <div className={styles.sectionLine} />
              </div>
              <div className={styles.service}>
                <li className={styles.serviceName}>Luxury Treatments</li>
                <span className={styles.price}>$45+</span>
              </div>
              <div className={styles.service}>
                <li className={styles.serviceName}>Keratin Treatment Express</li>
                <span className={styles.price}>$200+</span>
              </div>
              <div className={styles.service}>
                <li className={styles.serviceName}>Keratin Treatment Neutral</li>
                <span className={styles.price}>$400</span>
              </div>
            </div>
            <div className={styles.servicesItem}>
              <div className={styles.sectionHeader}>
                Styling
                <div className={styles.sectionLine} />
              </div>
              <div className={styles.service}>
                <li className={styles.serviceName}>Updo</li>
                <span className={styles.price}>$175+</span>
              </div>
              <div className={styles.service}>
                <li className={styles.serviceName}>Blowout</li>
                <span className={styles.price}>$85+</span>
              </div>
              <div className={styles.service}>
                <li className={styles.serviceName}>Makeup</li>
                <span className={styles.price}>$120+</span>
              </div>
              <div className={styles.service}>
                <li className={styles.serviceName}>Bridal Hair</li>
                <span className={styles.price}>Consultation</span>
              </div>
              <div className={styles.service}>
                <li className={styles.serviceName}>Bridal Makeup</li>
                <span className={styles.price}>Consultation</span>
              </div>
            </div>
            <div className={styles.pricingNote}>All service prices are subject to change upon consultation</div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Services
