import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../../test/testUtils'
import { Pagination } from '../Pagination'

describe('<Pagination />', () => {
  const defaultProps = {
    page: 0,
    query: '',
    totalPages: 0,
    totalJobs: 0,
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
  })
})
