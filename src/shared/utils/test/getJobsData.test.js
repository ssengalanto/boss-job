import getJobsData from '../getJobsData'

const data = [
  {
    id: 17348,
    degree: 'Diploma',
    job_title: 'System Engineer',
    job_country: 'Philippines',
    job_type: 'Full-time',
    job_location: 'Makati',
    salary_range_from: 30000,
    salary_range_to: 40000,
    company_name: 'wealth access inc.',
    company_location: 'Makati',
    company_logo:
      'https://assets.bossjob.com/companies/16772/logo/AjA3bF1frLeJOhIv9nfyIPkbQAAEdpKAqiJ8N4AJ.png',
    xp_lvl: '3 - 5 years',
    job_created_at: '2019-07-18',
    not_needed_1: '',
    not_needed_2: '',
    not_needed_3: ''
  },
  {
    id: 17348,
    degree: 'Diploma',
    job_title: 'System Engineer',
    job_country: 'Philippines',
    job_type: 'Full-time',
    job_location: 'Makati',
    salary_range_from: 30000,
    salary_range_to: 40000,
    company_name: 'wealth access inc.',
    company_location: 'Makati',
    company_logo:
      'https://assets.bossjob.com/companies/16772/logo/AjA3bF1frLeJOhIv9nfyIPkbQAAEdpKAqiJ8N4AJ.png',
    xp_lvl: '3 - 5 years',
    job_created_at: '2019-07-18',
    not_needed_1: '',
    not_needed_2: '',
    not_needed_3: ''
  }
]

describe('getAppData', () => {
  it('should return a specific key value pairs from a given data', () => {
    const result = getJobsData(data)
    expect(result).toEqual([
      {
        id: 17348,
        degree: 'Diploma',
        job_title: 'System Engineer',
        job_country: 'Philippines',
        job_type: 'Full-time',
        job_location: 'Makati',
        salary_range_from: 30000,
        salary_range_to: 40000,
        company_name: 'wealth access inc.',
        company_location: 'Makati',
        company_logo:
          'https://assets.bossjob.com/companies/16772/logo/AjA3bF1frLeJOhIv9nfyIPkbQAAEdpKAqiJ8N4AJ.png',
        xp_lvl: '3 - 5 years',
        job_created_at: '2019-07-18'
      },
      {
        id: 17348,
        degree: 'Diploma',
        job_title: 'System Engineer',
        job_country: 'Philippines',
        job_type: 'Full-time',
        job_location: 'Makati',
        salary_range_from: 30000,
        salary_range_to: 40000,
        company_name: 'wealth access inc.',
        company_location: 'Makati',
        company_logo:
          'https://assets.bossjob.com/companies/16772/logo/AjA3bF1frLeJOhIv9nfyIPkbQAAEdpKAqiJ8N4AJ.png',
        xp_lvl: '3 - 5 years',
        job_created_at: '2019-07-18'
      }
    ])
  })
})
