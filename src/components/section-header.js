import React from 'react'
import PropTypes from 'prop-types'
import styles from 'styles/section-header.module.scss'

const SectionHeader = ({ text, alignment }) => (
  <div className={`${styles.sectionHeader} ${styles[alignment]}`}>
    <div className={styles.text}>
      {text}
    </div>
    <div className={styles.headerLine}>
    </div>
  </div>
)

SectionHeader.propTypes = {
  text: PropTypes.string,
  alignment: PropTypes.string
}

SectionHeader.defaultProps = {
  text: '',
  alignment: 'center'
}

export default SectionHeader
