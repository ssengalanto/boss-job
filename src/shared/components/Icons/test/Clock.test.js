import React from 'react'
import { shallow } from 'enzyme'

import Clock from '../Clock'

describe('<Clock />', () => {
  const defaultProps = {
    className: ''
  }
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Clock {...setupProps} />)
  }

  describe('<Clock /> Render', () => {
    it('renders without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
  })
})
