import React from 'react'
import { shallow } from 'enzyme'

import ErrorMessage from '../ErrorMessage'
import { findByTestAttr } from '../../../../test/testUtils'

describe('<ErrorMessage />', () => {
  const defaultProps = {
    error: null
  }

  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<ErrorMessage {...setupProps} />)
  }
  describe('<ErrorMessage /> Render', () => {
    it('renders without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
    it('should not render any text when no error', () => {
      const error = null
      const wrapper = setup({ error })
      const component = findByTestAttr(wrapper, 'error-message')
      expect(component.text()).toBe('')
    })
    it('should render `error text` correctly when there`s an error', () => {
      const error = 'some error'
      const wrapper = setup({ error })
      const component = findByTestAttr(wrapper, 'error-message')
      expect(component.text()).toBe(error)
    })
  })
})
