import React from 'react'
import { shallow } from 'enzyme'

import Header from '../Header'

describe('<Header />', () => {
  describe('<Header /> Render', () => {
    it('renders without error', () => {
      const wrapper = shallow(<Header />)
      expect(wrapper.exists()).toBe(true)
    })
  })
})
