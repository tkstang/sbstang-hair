import React from 'react'
import styles from 'styles/testimonials.module.scss';

const Testimonials = () => {
  const allReviews = [
    {
      review: `"Samantha Stang is a hair genius.  I leave the salon with my hair looking amazing.  I show her pictures of what I want and she makes my hair look better than in the picture I showed her."`,
      reviewer: 'Erin A.'
    },
    {
      review: `"She is a true perfectionist and I recommend her for any hair service, especially color.  I've been going to her for years, and she has yet to disappoint."`,
      reviewer: 'Emily B.'
    },
    {
      review: `"I have never met a hair stylist who took so much pride and care in the perfection of their customer's hair.  I walked out feeling like a million bucks and my hair color looks natural and beautiful."`,
      reviewer: 'Kaede H.'
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
