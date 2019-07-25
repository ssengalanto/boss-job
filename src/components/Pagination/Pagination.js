/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './Pagination.module.scss'
import * as actions from '../../store/actions'

export class Pagination extends Component {
  constructor(props) {
    super(props)

    this.state = { pager: {} }

    this.setPage = this.setPage.bind(this)
    this.getPager = this.getPager.bind(this)
  }

  componentDidMount() {
    const { page } = this.props
    this.setPage(page)
  }

  componentDidUpdate(prevProps) {
    const { page, totalPages, totalJobs, query } = this.props
    if (
      totalPages !== prevProps.totalPages &&
      totalJobs !== prevProps.totalJobs &&
      query === prevProps.query
    ) {
      this.setPage(page)
    }

    if (query !== prevProps.query) {
      this.setPage(1)
    }
  }

  getPager(currentPage) {
    const { totalPages } = this.props

    let startPage
    let endPage
    if (totalPages <= 5) {
      startPage = 1
      endPage = totalPages
    } else if (currentPage <= 3) {
      startPage = 1
      endPage = 5
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - 4
      endPage = totalPages
    } else {
      startPage = currentPage - 2
      endPage = currentPage + 2
    }

    const pages = [...Array(endPage + 1 - startPage).keys()].map(
      i => startPage + i
    )

    return {
      currentPage,
      startPage,
      endPage,
      pages
    }
  }

  setPage(page) {
    const { totalPages, onPageChange } = this.props

    if (page < 1 || page > totalPages) {
      return
    }
    window.scrollTo(0, 0)
    onPageChange(page)

    this.setState({ pager: this.getPager(page) })
  }

  render() {
    const { pager } = this.state
    const { totalPages } = this.props

    if (!pager.pages || pager.pages.length <= 1) {
      return null
    }

    return (
      <div className={styles.container} data-test="pagination-pages">
        {totalPages > 5 && (
          <button
            disabled={pager.currentPage === 1}
            type="button"
            onClick={() => this.setPage(1)}
          >
            First
          </button>
        )}
        <button
          disabled={pager.currentPage === 1}
          type="button"
          onClick={() => this.setPage(pager.currentPage - 1)}
        >
          &lt;
        </button>
        {pager.pages.map((page, index) => (
          <button
            key={index}
            className={pager.currentPage === page && `${styles.active}`}
            type="button"
            onClick={() => this.setPage(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={`${pager.currentPage === totalPages && styles.disabled}`}
          disabled={pager.currentPage === totalPages}
          type="button"
          onClick={() => this.setPage(pager.currentPage + 1)}
        >
          &gt;
        </button>
        {totalPages > 5 && (
          <button
            className={`${pager.currentPage === totalPages && styles.disabled}`}
            disabled={pager.currentPage === totalPages}
            type="button"
            onClick={() => this.setPage(totalPages)}
          >
            Last
          </button>
        )}
      </div>
    )
  }
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
  totalPages: PropTypes.number.isRequired,
  totalJobs: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
}

const mapStateToProps = ({ app: { totalPages, page, totalJobs, query } }) => ({
  totalPages,
  totalJobs,
  page,
  query
})

const mapDispatchToProps = dispatch => ({
  onPageChange: page => dispatch(actions.paginateSearch(page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)
