import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../../../test/testUtils'
import Employer from '../Employer'

describe('<Employer />', () => {
  const defaultProps = {
    logo: '',
    name: ''
  }

  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Employer {...setupProps} />)
  }

  describe('<Employer /> Render', () => {
    it('renders without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
    it('renders `props.name` correctly', () => {
      const name = 'Yolo Technology'
      const wrapper = setup({ name })
      const component = findByTestAttr(wrapper, 'employer-name')
      expect(component.text()).toBe(name)
    })
    it('should not render an image if props.logo is falsy', () => {
      const logo = ''
      const wrapper = setup({ logo })
      const component = findByTestAttr(wrapper, 'employer-logo')
      expect(component.exists()).toBe(false)
    })
    it('should render an image if props.logo is truthy', () => {
      const logo = 'some src'
      const wrapper = setup({ logo })
      const component = findByTestAttr(wrapper, 'employer-logo')
      expect(component.exists()).toBe(true)
    })
  })
})
