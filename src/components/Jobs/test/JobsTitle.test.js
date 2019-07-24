import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../../test/testUtils'
import JobsTitle from '../JobsTitle'

describe('<JobsTitle />', () => {
  const defaultProps = {
    jobTitle: '',
    minSalary: 0,
    maxSalary: 0
  }
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<JobsTitle {...setupProps} />)
  }

  describe('<JobsTitle /> Render', () => {
    it('renders without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
    it('renders `props.jobTitle` correctly', () => {
      const jobTitle = 'React Developer'
      const wrapper = setup({ jobTitle })
      const component = findByTestAttr(wrapper, 'jobs-title-title')
      expect(component.text()).toBe(jobTitle)
    })
    it('renders `props.minSalary` correctly', () => {
      const minSalary = 30000
      const wrapper = setup({ minSalary })
      const component = findByTestAttr(wrapper, 'jobs-title-min-salary')
      expect(component.text()).toBe('30k')
    })
    it('renders `props.maxSalary` correctly', () => {
      const maxSalary = 40000
      const wrapper = setup({ maxSalary })
      const component = findByTestAttr(wrapper, 'jobs-title-max-salary')
      expect(component.text()).toBe('40k')
    })
  })
})
