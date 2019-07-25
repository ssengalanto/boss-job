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
    it('should not render `skip-decrement-button` when page >= 1', () => {
      const page = 1
      const wrapper = setup({ page })
      const component = findByTestAttr(
        wrapper,
        'pagination-skip-decrement-button'
      )
      expect(component.exists()).toBe(false)
    })
    it('should render `skip-decrement-button` when page -3 > 1', () => {
      const page = 5
      const wrapper = setup({ page })
      const component = findByTestAttr(
        wrapper,
        'pagination-skip-decrement-button'
      )
      expect(component.exists()).toBe(true)
    })
    it('should render `skip-increment-button` when page + 4 < totalPages', () => {
      const page = 10
      const totalPages = 15
      const wrapper = setup({ page, totalPages })
      const component = findByTestAttr(
        wrapper,
        'pagination-skip-increment-button'
      )
      expect(component.exists()).toBe(true)
    })
    it('should not render `skip-increment-button` when page + 4 >= totalPages', () => {
      const page = 13
      const totalPages = 15
      const wrapper = setup({ page, totalPages })
      const component = findByTestAttr(
        wrapper,
        'pagination-skip-increment-button'
      )
      expect(component.exists()).toBe(false)
    })
  })

  describe('<Pagination /> Interactions', () => {
    let wrapper
    let onPageChange
    const page = 10
    const totalPages = 200
    beforeEach(() => {
      onPageChange = jest.fn()
      wrapper = setup({ onPageChange, totalPages, page })
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
      const button = findByTestAttr(wrapper, 'pagination-page-button').at(1)
      button.simulate('click')
      expect(onPageChange).toHaveBeenCalled()
      expect(onPageChange).toHaveBeenCalledWith(page)
    })
    it('should call `onPageChange` on `next-button` click', () => {
      const button = findByTestAttr(wrapper, 'pagination-prev-button')
      button.simulate('click')
      expect(onPageChange).toHaveBeenCalled()
      expect(onPageChange).toHaveBeenCalledWith(page - 1)
    })
    it('should call `onPageChange` on `prev-button` click', () => {
      const button = findByTestAttr(wrapper, 'pagination-next-button')
      button.simulate('click')
      expect(onPageChange).toHaveBeenCalled()
      expect(onPageChange).toHaveBeenCalledWith(page + 1)
    })
    it('should call `onPageChange` on `skip-increment-button` click', () => {
      const button = findByTestAttr(wrapper, 'pagination-skip-increment-button')
      button.simulate('click')
      expect(onPageChange).toHaveBeenCalled()
      expect(onPageChange).toHaveBeenCalledWith(page + 3)
    })
    it('should call `onPageChange` on `skip-decrement-button` click', () => {
      const button = findByTestAttr(wrapper, 'pagination-skip-decrement-button')
      button.simulate('click')
      expect(onPageChange).toHaveBeenCalled()
      expect(onPageChange).toHaveBeenCalledWith(page - 3)
    })
  })
})
