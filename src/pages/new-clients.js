import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"
import styles from "styles/new-clients.module.scss"

const NewClients = () => (
  <Layout>
    {/** To Do: Improve SEO */}
    <SEO title="New Clients" />
    <div className={styles.newClients}>
      <div className={styles.bookingSection}>
        <div className={styles.sectionHeader}>
          How to Book
          <div className={styles.sectionLine} />
        </div>
        <p>
          Before your first visit with me there are a few things I want to cover so that you feel comfortable and well informed.
        </p>
        <p>
          This website is here for you to have questions answered and also to help you in the booking process. Please be sure to visit the FAQ for more information. In the event your questions are not answered always feel free to reach out to me at sbstanghair@gmail.com. If you are unsure what service you would like, or have questions as to what would be best, I always recommend simply booking a free, in-person consultation. From there we can decide the appropriate services for a future date.
        </p>
      </div>
      <div className={styles.appointmentSection}>
        <div className={styles.appointmentStep}>

        </div>
      </div>
    </div>
  </Layout>
)

export default NewClients
