import React from 'react'
import PropTypes from 'prop-types'

import styles from './Icons.module.scss'

const Education = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 12.976 12.369"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs />
    <g transform="translate(-858.3 -556.91)" data-name="Group 30146">
      <path
        transform="translate(0 62.391)"
        d="M861.5 499.9l-.7 3.1a1.022 1.022 0 0 0 .4 1l3.3 2.2a1.083 1.083 0 0 0 1.1 0l3.3-2.2a1.022 1.022 0 0 0 .4-1l-.7-3.1"
        data-name="Path 15598"
      />
      <path
        transform="translate(0 62.391)"
        d="M864.5 495.2l-5.3 3.5c-.1.1-.1 0 0 .1l5.2 2.5a1.708 1.708 0 0 0 1.4 0l5.2-2.5c.2-.1.2 0 0-.1l-5.3-3.5a1.271 1.271 0 0 0-1.2 0z"
        data-name="Path 15599"
      />
      <path
        transform="translate(0 62.391)"
        d="m860 500.7-1.2 1.6"
        data-name="Path 15600"
      />
    </g>
  </svg>
)

Education.defaultProps = {
  className: styles.icon
}

Education.propTypes = {
  className: PropTypes.string
}

export default Education
