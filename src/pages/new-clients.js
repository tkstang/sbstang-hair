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

      </div>
      <div className={styles.appointmentSection}>
        <div className={styles.appointmentStep}>

        </div>
      </div>
    </div>
  </Layout>
)

export default NewClients
