import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../../test/testUtils'
import { App } from '../App'

describe('<App />', () => {
  const defaultProps = {
    onGetInitState: jest.fn(),
    onJobSearch: jest.fn()
  }
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<App {...setupProps} />)
  }

  describe('<App /> Render', () => {
    it('renders without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
    it('should call `onGetInitData` on componentDidMount', () => {
      const onGetInitState = jest.fn()
      const wrapper = setup({ onGetInitState })
      wrapper.instance().componentDidMount()
      expect(onGetInitState).toHaveBeenCalled()
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
