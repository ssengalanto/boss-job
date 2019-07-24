import React from 'react'
import PropTypes from 'prop-types'

import styles from './Icons.module.scss'

const Briefcase = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 12 11"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs />
    <g transform="translate(-743 -557.59)" data-name="Group 30147">
      <path
        transform="translate(0 62.391)"
        d="M743.5 501.7h11v-3.5a.472.472 0 0 0-.5-.5h-10a.472.472 0 0 0-.5.5zm3-4h5v-1.5a.472.472 0 0 0-.5-.5h-4a.472.472 0 0 0-.5.5zm-3 4v3.5a.472.472 0 0 0 .5.5h10a.472.472 0 0 0 .5-.5v-3.5z"
        data-name="Path 15597"
      />
    </g>
  </svg>
)

Briefcase.defaultProps = {
  className: styles.icon
}

Briefcase.propTypes = {
  className: PropTypes.string
}

export default Briefcase
