import React from 'react'
import { shallow } from 'enzyme'

import JobsDetail from '../JobsDetail'
import { findByTestAttr } from '../../../test/testUtils'

describe('<JobsDetail />', () => {
  const defaultProps = {
    location: '',
    experience: '',
    education: '',
    jobType: ''
  }
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<JobsDetail {...setupProps} />)
  }

  describe('<JobsDetail /> Render', () => {
    it('renders without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
    it('renders `props.location` correctly', () => {
      const location = 'Singapore'
      const wrapper = setup({ location })
      const component = findByTestAttr(wrapper, 'jobs-detail-location')
      expect(component.text()).toBe(location)
    })
    it('renders `props.experience` correctly', () => {
      const experience = '3 - 5 years'
      const wrapper = setup({ experience })
      const component = findByTestAttr(wrapper, 'jobs-detail-experience')
      expect(component.text()).toBe(experience)
    })
    it('renders `props.education` correctly', () => {
      const education = "bachelor's"
      const wrapper = setup({ education })
      const component = findByTestAttr(wrapper, 'jobs-detail-education')
      expect(component.text()).toBe(education)
    })
    it('renders `props.jobType` correctly', () => {
      const jobType = 'full time'
      const wrapper = setup({ jobType })
      const component = findByTestAttr(wrapper, 'jobs-detail-type')
      expect(component.text()).toBe(jobType)
    })
  })
})
