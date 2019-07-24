import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../../test/testUtils'
import App from '../App'

describe('<App />', () => {
  const setup = (props = {}) => shallow(<App {...props} />)

  describe('<App /> Render', () => {
    it('renders without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
    it('should render `<Header />` component', () => {
      const wrapper = setup()
      const component = findByTestAttr(wrapper, 'header-component')
      expect(component.exists()).toBe(true)
    })
    it('should render `<Filter />` component', () => {
      const wrapper = setup()
      const component = findByTestAttr(wrapper, 'filter-component')
      expect(component.exists()).toBe(true)
    })
    it('should render `<Jobs />` component', () => {
      const wrapper = setup()
      const component = findByTestAttr(wrapper, 'jobs-component')
      expect(component.exists()).toBe(true)
    })
  })
})
