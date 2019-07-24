import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import styles from './Jobs.module.scss'
import JobsTitle from './JobsTitle'
import JobsDetail from './JobsDetail'
import FromNow from '../../shared/components/FromNow'
import Employer from '../../shared/components/Employer'

const Jobs = ({ data }) => (
  <main className={styles.main}>
    <div data-test="jobs-count" className={styles.count}>
      {data.total_num} {data.total_num <= 1 ? 'job' : 'jobs'} found
    </div>
    <div className={styles.separator} />
    {data.jobs.map(job => (
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

Jobs.propTypes = {
  data: PropTypes.shape({
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
    page: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    total_num: PropTypes.number.isRequired,
    sort: PropTypes.number.isRequired,
    query: PropTypes.string.isRequired
  }).isRequired
}

export default Jobs
