import React from 'react'
import PropTypes from 'prop-types'

import styles from './Employer.module.scss'

const Employer = ({ logo, name }) => (
  <div className={styles.container}>
    {logo && (
      <img
        data-test="employer-logo"
        className={styles.logo}
        src={logo}
        alt={name}
      />
    )}
    <span data-test="employer-name" className={styles.name}>
      {name}
    </span>
  </div>
)

Employer.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Employer
