import React from 'react'
import { Link } from 'gatsby'
import Layout from 'components/layout'
import SEO from 'components/seo'
import styles from 'styles/new-clients.module.scss'

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
          This website is here for you to have questions answered and also to help you in the booking process. Please be sure to visit the <Link to="/faq">FAQ</Link> for more information. In the event your questions are not answered always feel free to reach out to me at <a href="mailto:sbstanghair@gmail.com?subject=Inquiry from sbstanghair.com">sbstanghair@gmail.com</a>. If you are unsure what service you would like, or have questions as to what would be best, I always recommend simply booking a free, in-person consultation. From there we can decide the appropriate services for a future date.
        </p>
      </div>
      <div className={styles.appointmentSection}>
        <div className={styles.appointmentStep}>
          <div className={styles.sectionHeader}>
            1
            <div className={styles.sectionLine} />
          </div>
          <p>Upon booking your first appointment with me you will be provided with an email listing the date and time of your upcoming service.</p>
          <p>As the date of the appointment approaches, you will receive a reminder call to confirm or make changes as needed.</p>
          <p>Please be mindful of my cancellation policy when making changes.</p>
        </div>
        <div className={styles.appointmentStep}>
          <div className={styles.sectionHeader}>
            2
            <div className={styles.sectionLine} />
          </div>
          <p>On the day of your appointment we will begin with a consultation, discussing together our plan for your visit as well as any future goals we might have for your hair.</p>
          <p>I truly love making a client feel welcome and comfortable.I enjoy offering my advice and suggestions as to what would best suit them. I take into consideration their own personal style, hair type and lifestyle while taking care to include the clients personal goals and input.</p>
        </div>
        <div className={styles.appointmentStep}>
          <div className={styles.sectionHeader}>
            3
            <div className={styles.sectionLine} />
          </div>
          <p>From there, we will move forward with the desired service and I will finish the look off with a complimentary blow-dry and style.</p>
          <p>I will also be sure to cover an at home regimen to keep your hair looking its best even after you leave my chair.</p>
        </div>
      </div>
      <div className={styles.policySection}>
        <div className={styles.policy}>
          <div className={styles.policyHeader}>
            Cancellation Policy
          </div>
          I do the very best that I can to accommodate my clients and their busy schedules and respect that their time is valuable. As my client, I kindly ask that you do the same when booking appointments. If issues come up with the timing of your appointment please allow 24 hours when giving notice to cancel or move appointments to avoid a cancellation fee. My cancellation fee is 50% of the services booked for that day.
        </div>
        <div className={styles.policy}>
          <div className={styles.policyHeader}>
            Late Policy
          </div>
          It is very important to me to make sure that I am able to deliver a thorough and timely service to all of my clients. I always want to make sure that the quality of service is not compromised for each client I have in a given day. To ensure all of my appointments run smoothly, if you are running more than 15 minutes late, please contact the salon to let me know as soon as possible. If you are running more than 15 minutes late I will evaluate if there is sufficient time to still provide the service. If there is not enough time to do so, we will reschedule for a later date. In the event that this becomes a reocurring issue you may be asked to pay the late cancel fee.
        </div>
      </div>
    </div>
  </Layout>
)

export default NewClients
