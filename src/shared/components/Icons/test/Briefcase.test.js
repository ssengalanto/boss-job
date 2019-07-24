import React from 'react'
import { shallow } from 'enzyme'

import Briefcase from '../Briefcase'

describe('<Briefcase />', () => {
  const defaultProps = {
    className: ''
  }
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Briefcase {...setupProps} />)
  }

  describe('<Briefcase /> Render', () => {
    it('renders without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
  })
})
