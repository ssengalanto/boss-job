import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../../test/testUtils'
import { Filter } from '../Filter'

describe('<Filter />', () => {
  const defaultProps = {
    search: '',
    loading: false,
    searchChangeHandler: jest.fn(),
    searchKeyDownHandler: jest.fn()
  }
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Filter {...setupProps} />)
  }

  describe('<Filter /> Render', () => {
    it('renders without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
  })

  describe('<Filter /> Interactions', () => {
    it('should call `inputChangeHandler` onChange', () => {
      const event = { target: { value: 'ssen galanto' } }
      const searchChangeHandler = jest.fn()
      const wrapper = setup({ searchChangeHandler })
      const input = findByTestAttr(wrapper, 'filter-input')
      input.simulate('change', event)

      expect(searchChangeHandler).toHaveBeenCalled()
      expect(searchChangeHandler).toHaveBeenCalledWith(event)
    })
    it('should call `inputChangeHandler` on change', () => {
      const event = { target: { value: 'ssen galanto' }, key: 'Enter' }
      const searchKeyDownHandler = jest.fn()
      const wrapper = setup({ searchKeyDownHandler })
      const input = findByTestAttr(wrapper, 'filter-input')
      input.simulate('keydown', event)

      expect(searchKeyDownHandler).toHaveBeenCalled()
      expect(searchKeyDownHandler).toHaveBeenCalledWith(event)
    })
  })
})
