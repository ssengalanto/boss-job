import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

import styles from './FromNow.module.scss'

const FromNow = ({ className, date }) => (
  <span className={className}>{moment(date).fromNow()}</span>
)

FromNow.defaultProps = {
  className: styles.moment
}

FromNow.propTypes = {
  date: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default FromNow
