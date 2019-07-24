import React from 'react'
import { shallow } from 'enzyme'

import Education from '../Education'

describe('<Education />', () => {
  const defaultProps = {
    className: ''
  }
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Education {...setupProps} />)
  }

  describe('<Education /> Render', () => {
    it('renders without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
  })
})
