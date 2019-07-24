import React from 'react'
import PropTypes from 'prop-types'

import styles from './Jobs.module.scss'
import Briefcase from '../../shared/components/Icons/Briefcase'
import Clock from '../../shared/components/Icons/Clock'
import Education from '../../shared/components/Icons/Education'
import Location from '../../shared/components/Icons/Location'

const JobsDetail = ({ location, experience, education, jobType }) => (
  <div className={styles.details}>
    <div className={styles.column}>
      <p className={styles.location}>
        <Location /> <span data-test="jobs-detail-location">{location}</span>
      </p>
      <p className={styles.experience}>
        <Briefcase />
        <span data-test="jobs-detail-experience">{experience}</span>
      </p>
    </div>
    <div className={styles.column}>
      <p className={styles.education}>
        <Education /> <span data-test="jobs-detail-education">{education}</span>
      </p>
      <p className={styles['job-type']}>
        <Clock /> <span data-test="jobs-detail-type">{jobType}</span>
      </p>
    </div>
  </div>
)

JobsDetail.propTypes = {
  location: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  jobType: PropTypes.string.isRequired
}

export default JobsDetail
