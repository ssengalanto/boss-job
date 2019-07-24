import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'

describe('<App />', () => {
  describe('<App /> Render', () => {
    it('renders without error', () => {
      const wrapper = shallow(<App />)
      expect(wrapper.exists()).toBe(true)
    })
  })
})
