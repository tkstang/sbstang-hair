import React from 'react'
import styles from 'styles/testimonials.module.scss';

const Testimonials = () => {
  const allReviews = [
    {
      review: `"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"`,
      reviewer: 'Name One'
    },
    {
      review: `"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"`,
      reviewer: 'Name Two'
    },
    {
      review: `"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"`,
      reviewer: 'Name Three'
    }
  ];

  // For smaller screens this will shift between the three reviews
  let testimonials = allReviews;

  return (
    <div>
      <div className={styles.sectionHeader}>
        Testimonials
        <div className={styles.sectionLine} />
      </div>
      <div className={styles.testimonialContainer}>
        {
          testimonials.map((testimonial, i) => {
            return (
              <div className={styles.testimonialItem} key={i}>
                <div className={styles.review}>{testimonial.review}</div>
                <div className={styles.reviewer}>{testimonial.reviewer}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Testimonials
