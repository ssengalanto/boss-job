/* eslint-disable camelcase */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import styles from './Jobs.module.scss'
import Loader from '../../shared/components/Loader'
import JobsTitle from './JobsTitle'
import JobsDetail from './JobsDetail'
import FromNow from '../../shared/components/FromNow'
import Employer from '../../shared/components/Employer'

export const Jobs = ({ jobs, total_num, loading }) => {
  let content
  if (loading) {
    content = <Loader data-test="jobs-loader-component" />
  } else {
    content = (
      <main data-test="main" className={styles.main}>
        <div data-test="jobs-count" className={styles.count}>
          {total_num} {total_num <= 1 ? 'job' : 'jobs'} found
        </div>
        <div className={styles.separator} />
        {jobs.map(job => (
          <Fragment key={job.id}>
            <div data-test="jobs-item">
              <JobsTitle
                data-test="jobs-title-component"
                jobTitle={job.job_title}
                minSalary={job.salary_range_from}
                maxSalary={job.salary_range_to}
              />
              <JobsDetail
                data-test="jobs-detail-component"
                location={job.job_location}
                experience={job.xp_lvl}
                education={job.degree}
                jobType={job.job_type}
              />
              <div className={styles.employer}>
                <Employer
                  data-test="jobs-employer-component"
                  logo={job.company_logo}
                  name={job.company_name}
                />
                <FromNow
                  data-test="jobs-from-now-component"
                  date={job.job_created_at}
                />
              </div>
            </div>
            <div className={styles.separator} />
          </Fragment>
        ))}
      </main>
    )
  }
  return content
}

Jobs.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      degree: PropTypes.string.isRequired,
      job_title: PropTypes.string.isRequired,
      job_country: PropTypes.string.isRequired,
      job_type: PropTypes.string.isRequired,
      job_location: PropTypes.string.isRequired,
      salary_range_from: PropTypes.number.isRequired,
      salary_range_to: PropTypes.number.isRequired,
      company_name: PropTypes.string.isRequired,
      company_location: PropTypes.string.isRequired,
      company_logo: PropTypes.string.isRequired,
      xp_lvl: PropTypes.string.isRequired,
      job_created_at: PropTypes.string.isRequired
    })
  ).isRequired,
  total_num: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = ({ jobs, app: { total_num, loading } }) => ({
  jobs,
  total_num,
  loading
})

export default connect(mapStateToProps)(Jobs)
