import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../../test/testUtils'
import Jobs from '../Jobs'

describe('<Jobs />', () => {
  const data = {
    jobs: [
      {
        id: 0,
        degree: '',
        job_title: '',
        job_country: '',
        job_type: '',
        job_location: '',
        salary_range_from: 0,
        salary_range_to: 0,
        company_name: '',
        company_location: '',
        company_logo: '',
        xp_lvl: '',
        job_created_at: ''
      }
    ],
    page: 0,
    size: 0,
    total_num: 0,
    sort: 0,
    query: ''
  }

  const defaultProps = { data }
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Jobs {...setupProps} />)
  }

  describe('<Jobs /> Render', () => {
    it('renders without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
    it('renders <JobsTitle /> component without error', () => {
      const wrapper = setup()
      const component = findByTestAttr(wrapper, 'jobs-title-component')
      expect(component.exists()).toBe(true)
    })
    it('renders <JobsDetail /> component without error', () => {
      const wrapper = setup()
      const component = findByTestAttr(wrapper, 'jobs-detail-component')
      expect(component.exists()).toBe(true)
    })
    it('renders <Employer /> component without error', () => {
      const wrapper = setup()
      const component = findByTestAttr(wrapper, 'jobs-employer-component')
      expect(component.exists()).toBe(true)
    })
    it('renders <FromNow /> component without error', () => {
      const wrapper = setup()
      const component = findByTestAttr(wrapper, 'jobs-from-now-component')
      expect(component.exists()).toBe(true)
    })
    it('should display `job` instead of `jobs` when total_num <= 1', () => {
      const total = 0
      const wrapper = setup({ data: { ...data, total_num: total } })
      const count = findByTestAttr(wrapper, 'jobs-count')
      expect(count.text()).toBe(`${total} job found`)
    })
    it('should display `jobs` instead of `job` when total_num > 1', () => {
      const total = 2
      const wrapper = setup({ data: { ...data, total_num: total } })
      const count = findByTestAttr(wrapper, 'jobs-count')
      expect(count.text()).toBe(`${total} jobs found`)
    })
    // it('should render `<JobsItem />` equal to total number of jobs', () => {
    //   const wrapper = setup()
    //   const component = findByTestAttr(wrapper, 'jobs-item')
    //   expect(component).toHaveLength(data.jobs.length)
    // })
  })

  describe('<Jobs /> Interactions', () => {})
})
