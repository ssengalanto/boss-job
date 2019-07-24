import React from 'react'
import moment from 'moment'
import { shallow } from 'enzyme'

import FromNow from '../FromNow'

describe('<FromNow />', () => {
  const defaultProps = {
    date: ''
  }

  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<FromNow {...setupProps} />)
  }
  describe('<FromNow /> Render', () => {
    it('renders without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
    it('renders `props.date` correctly', () => {
      const date = '2019-07-24'
      const wrapper = setup({ date })
      expect(wrapper.text()).toBe(moment(date).fromNow())
    })
  })
})
