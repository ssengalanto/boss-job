import React from 'react'
import { shallow } from 'enzyme'

import Search from '../Search'

describe('<Search />', () => {
  const defaultProps = {
    className: ''
  }
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Search {...setupProps} />)
  }

  describe('<Search /> Render', () => {
    it('renders without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
  })
})
