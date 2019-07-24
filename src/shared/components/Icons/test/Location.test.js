import React from 'react'
import { shallow } from 'enzyme'

import Location from '../Location'

describe('<Location />', () => {
  const defaultProps = {
    className: ''
  }
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Location {...setupProps} />)
  }

  describe('<Location /> Render', () => {
    it('renders without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
  })
})
