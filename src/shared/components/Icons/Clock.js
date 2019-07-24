import React from 'react'
import PropTypes from 'prop-types'

import styles from './Icons.module.scss'

const Clock = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 13 13"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs />
    <g transform="translate(-960.5 -557.09)" data-name="Group 30145">
      <circle
        transform="translate(961 557.59)"
        cx="6"
        cy="6"
        r="6"
        data-name="Ellipse 3006"
      />
      <path
        transform="translate(0 62.391)"
        d="m967 498.3v3.8h3"
        data-name="Path 15601"
      />
    </g>
  </svg>
)

Clock.defaultProps = {
  className: styles.icon
}

Clock.propTypes = {
  className: PropTypes.string
}

export default Clock
