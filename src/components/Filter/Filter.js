/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react'
import PropTypes from 'prop-types'

import styles from './Filter.module.scss'
import Search from '../../shared/components/Icons/Search'

const Filter = ({ search, searchChangeHandler, searchKeyDownHandler }) => (
  <div className={styles.container}>
    <div className={styles.form}>
      <Search className={styles.icon} />
      <label htmlFor="filter-input" className="sr-only">
        Search
      </label>
      <input
        id="filter-input"
        data-test="filter-input"
        className={styles.input}
        value={search}
        onChange={searchChangeHandler}
        onKeyDown={searchKeyDownHandler}
        type="search"
        placeholder="Search for job title or company name"
      />
    </div>
    <div className={styles.separator} />
    <button type="button" className={styles.button}>
      Filter results
    </button>
  </div>
)

Filter.propTypes = {
  search: PropTypes.string.isRequired,
  searchChangeHandler: PropTypes.func.isRequired,
  searchKeyDownHandler: PropTypes.func.isRequired
}

export default Filter
