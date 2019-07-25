import React from 'react'
import PropTypes from 'prop-types'

import styles from './ErrorMessage.module.scss'

const ErrorMessage = ({ error }) => (
  <main className={styles.container}>
    <p data-test="error-message" className={styles.error}>
      {error}
    </p>
  </main>
)

ErrorMessage.defaultProps = {
  error: null
}

ErrorMessage.propTypes = {
  error: PropTypes.string
}

export default ErrorMessage
