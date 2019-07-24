import React from 'react'
import PropTypes from 'prop-types'

import styles from './Icons.module.scss'

const Location = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 12 13.961"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs />
    <g transform="translate(-629.9 -556.19)" data-name="Group 30148">
      <path
        transform="translate(0 62.391)"
        d="m635.9 507.1c3.7-3.2 5.5-5.7 5.5-7.3a5.5 5.5 0 0 0-11 0c0 1.6 1.8 4.1 5.5 7.3z"
        data-name="Path 15596"
      />
      <circle
        transform="translate(634.4 560.69)"
        cx="1.5"
        cy="1.5"
        r="1.5"
        data-name="Ellipse 3005"
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
