/* eslint-disable camelcase */

const getJobsData = data => {
  const jobs = data.map(item => ({
    id: item.id,
    degree: item.degree,
    job_title: item.job_title,
    job_country: item.job_country,
    job_type: item.job_type,
    job_location: item.job_location,
    salary_range_from: item.salary_range_from,
    salary_range_to: item.salary_range_to,
    company_name: item.company_name,
    company_location: item.company_location,
    company_logo: item.company_logo,
    xp_lvl: item.xp_lvl,
    job_created_at: item.job_created_at
  }))

  return jobs
}

export default getJobsData
