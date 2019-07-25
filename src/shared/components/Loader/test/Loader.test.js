import React from 'react'
import { shallow } from 'enzyme'

import Loader from '../Loader'

describe('<Loader />', () => {
  describe('<Loader /> Render', () => {
    it('renders without error', () => {
      const wrapper = shallow(<Loader />)
      expect(wrapper.exists()).toBe(true)
    })
  })
})
