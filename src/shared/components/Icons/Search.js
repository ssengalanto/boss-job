import React from 'react'
import PropTypes from 'prop-types'

import styles from './Icons.module.scss'

const Location = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 21.011 23.111"
  >
    <g
      id="Group_29582"
      data-name="Group 29582"
      transform="translate(-278.2 -132.1)"
    >
      <g id="Group_25943" data-name="Group 25943">
        <circle
          id="Ellipse_2582"
          cx="8"
          cy="8"
          r="8"
          data-name="Ellipse 2582"
          transform="translate(279.2 133.1)"
        />
      </g>
      <path
        id="Line_5096"
        d="M5.4 6.2L0 0"
        data-name="Line 5096"
        transform="translate(292.4 147.6)"
      />
    </g>
  </svg>
)

Location.defaultProps = {
  className: styles.icon
}

Location.propTypes = {
  className: PropTypes.string
}

export default Location
