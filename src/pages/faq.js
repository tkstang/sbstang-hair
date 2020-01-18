import React from 'react'
import { Link } from 'gatsby'
import Layout from 'components/layout'
import SectionHeader from 'components/section-header'
import SEO from 'components/seo'
import styles from 'styles/faq.module.scss'

const FAQ = () => (
  <Layout>
    {/** TODO: Improve SEO */}
    <SEO title="FAQ" />
    <div className={styles.faq}>
      <div className={styles.faqSection}>
        <SectionHeader text={'faq'} />
        <div className={styles.question}>
          What does a haircut service entail?
        </div>
        <p>
          A haircut appointment starts off with a consultation where a custom cut will be designed to help accentuate your features keeping in mind your lifestyle and desired esthetic.  We will then head to the shampoo room for a relaxing shampoo and scalp massage. Next is the haircut, and then I finish the service off with a complimentary blowdry and style.
        </p>
        <div className={styles.question}>
          What does a color service entail?
        </div>
        <p>
          We will start off the appointment with a consultation where we will determine the desired end result. Following the consultation,  a custom color will be mixed for you and applied. During your processing time the salon offers beverages, magazines and free wi-fi to keep you comfortable. Once it is time to rinse the color you will receive a relaxing shampoo and scalp massage. Lastly you are given a complimentary blowdry and style so you can enjoy the results of your new color.
        </p>
        <div className={styles.question}>
          What is the difference between traditional highlights and Balayage?
        </div>
        <p>
          Traditional highlights are when hair is weaved into a foil in a desired pattern on the head.  Balayage is when color is swept, or painted, on the hair for a soft, organic effect.  Depending on the desired end result I may use one or both of these techniques.
        </p>
        <div className={styles.question}>
          Do you use anything to protect the hair when coloring?
        </div>
        <p>
          For every color client that I have, I carefully evaluate the current condition of their hair and the steps needed to achieve their desired look. I will always be completely honest with a client about what is possible without compromising the condition of the hair. In addition to this I always add Brazilian Bond Builder to my colors to keep the hair bonds strong.
        </p>
        <div className={styles.question}>
          Im a current client of yours and looking to change up my look how do I know what to book?
        </div>
        <p>
          I encourage clients, current and new, to book complimentary consultations when looking to make a change. Doing so will ensure that their next appointment is booked with the proper time required to meet their hair goals.
        </p>
        <div className={styles.question}>
          Can I bring my children or dog to the appointment?
        </div>
        <p>
          While I love children and animals, for safety and liability reasons, I ask that you do not bring them into the salon. There are several tools and chemicals that make a salon environment unsuitable for children. As for dogs, the California State Board of Cosmetology prohibits animals from being in a salon setting.
        </p>
        <div className={styles.question}>
          What is your cancellation policy?
        </div>
        <p>
          My cancellation policy can be found <Link to="/new-clients/#cancellation-policy">here</Link>.
        </p>
        <div className={styles.question}>
          What happens if I’m late to my appointment?
        </div>
        <p>
          Please reference my salon policies <Link to="/new-clients/#late-policy">here</Link>.
        </p>
      </div>
    </div>
  </Layout>
)

export default FAQ
