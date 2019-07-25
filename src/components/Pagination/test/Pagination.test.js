import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../../test/testUtils'
import { Pagination } from '../Pagination'

describe('<Pagination />', () => {
  const defaultProps = {
    page: 1,
    query: '',
    totalPages: 6,
    totalJobs: 72,
    onPageChange: jest.fn()
  }
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Pagination {...setupProps} />)
  }

  describe('<Pagination /> Render', () => {
    it('renders without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
    it('should render `pagination` when totalPages > 1', () => {
      const totalPages = 2
      const wrapper = setup({ totalPages })
      const component = findByTestAttr(wrapper, 'pagination-pages')
      expect(component.exists()).toBe(true)
    })
    it('should not render `pagination` when totalPages <= 1', () => {
      const totalPages = 1
      const wrapper = setup({ totalPages })
      const component = findByTestAttr(wrapper, 'pagination-pages')
      expect(component.exists()).toBe(false)
    })
    it('should render `first button` when totalPages > 5', () => {
      const totalPages = 6
      const wrapper = setup({ totalPages })
      const component = findByTestAttr(wrapper, 'pagination-first-button')
      expect(component.exists()).toBe(true)
    })
    it('should not render `first button` when totalPages < 5', () => {
      const totalPages = 4
      const wrapper = setup({ totalPages })
      const component = findByTestAttr(wrapper, 'pagination-first-button')
      expect(component.exists()).toBe(false)
    })
    it('should render `last button` when totalPages > 5', () => {
      const totalPages = 6
      const wrapper = setup({ totalPages })
      const component = findByTestAttr(wrapper, 'pagination-last-button')
      expect(component.exists()).toBe(true)
    })
    it('should not render `last button` when totalPages < 5', () => {
      const totalPages = 4
      const wrapper = setup({ totalPages })
      const component = findByTestAttr(wrapper, 'pagination-last-button')
      expect(component.exists()).toBe(false)
    })
  })

  describe('<Pagination /> Interactions', () => {
    let wrapper
    let onPageChange
    const totalPages = 200
    beforeEach(() => {
      onPageChange = jest.fn()
      wrapper = setup({ onPageChange, totalPages })
    })

    it('should call `onPageChange` on `first-button` click', () => {
      const button = findByTestAttr(wrapper, 'pagination-first-button')
      button.simulate('click')
      expect(onPageChange).toHaveBeenCalled()
      expect(onPageChange).toHaveBeenCalledWith(1)
    })
    it('should call `onPageChange` on `last-button` click', () => {
      const button = findByTestAttr(wrapper, 'pagination-last-button')
      button.simulate('click')
      expect(onPageChange).toHaveBeenCalled()
      expect(onPageChange).toHaveBeenCalledWith(totalPages)
    })
    it('should call `onPageChange` on `page-button` click', () => {
      const button = findByTestAttr(wrapper, 'pagination-page-button').at(3)
      button.simulate('click')
      expect(onPageChange).toHaveBeenCalled()
      expect(onPageChange).toHaveBeenCalledWith(4)
    })
  })
})
