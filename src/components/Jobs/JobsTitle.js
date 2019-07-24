import React from 'react'
import PropTypes from 'prop-types'

import styles from './Jobs.module.scss'
import kFormatter from '../../shared/utils/kFormatter'

const JobsTitle = ({ jobTitle, minSalary, maxSalary }) => (
  <div className={styles['job-title']}>
    <span className={styles.title} data-test="jobs-title-title">
      {jobTitle}
    </span>
    <span className={styles.salary}>
      &#8369;
      <span data-test="jobs-title-min-salary">{kFormatter(minSalary)}</span> -
      &#8369;
      <span data-test="jobs-title-max-salary">{kFormatter(maxSalary)}</span>
    </span>
  </div>
)

JobsTitle.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  minSalary: PropTypes.number.isRequired,
  maxSalary: PropTypes.number.isRequired
}

export default JobsTitle
