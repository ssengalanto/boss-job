/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from './Pagination.module.scss'
import * as actions from '../../store/actions'

export class Pagination extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pager: {
        currentPage: null,
        startPage: null,
        endPage: null,
        pages: []
      }
    }

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
    let currentPage = page
    if (page < 1) {
      currentPage = 1
    } else if (page > totalPages) {
      currentPage = totalPages
    }

    onPageChange(currentPage)

    this.setState({ pager: this.getPager(currentPage) })
  }

  render() {
    const { pager } = this.state
    const { totalPages, page } = this.props

    return (
      totalPages > 1 && (
        <section className={styles.container} data-test="pagination-pages">
          {/* prev button */}
          <button
            className={styles['prev-next']}
            disabled={page === 1}
            data-test="pagination-prev-button"
            type="button"
            onClick={() => this.setPage(page - 1)}
            aria-label="previous"
          >
            &lt;
          </button>
          {/* first page button */}
          <button
            className={page === 1 ? styles.active : ''}
            data-test="pagination-first-button"
            type="button"
            onClick={() => this.setPage(1)}
            aria-label="page 1"
          >
            1
          </button>
          {/* skip button `decrement` */}
          {page - 3 > 1 && (
            <button
              type="button"
              data-test="pagination-skip-decrement-button"
              onClick={() => this.setPage(page - 3)}
            >
              ...
            </button>
          )}
          {/* page buttons */}
          {pager.pages.map((pageNum, index) => {
            if (pageNum === 1) return null
            if (pageNum === totalPages) return null
            return (
              <button
                data-test="pagination-page-button"
                key={index}
                className={pageNum === page ? styles.active : ''}
                type="button"
                onClick={() => this.setPage(pageNum)}
                aria-label={`page ${pageNum}`}
              >
                {pageNum}
              </button>
            )
          })}
          {/* skip button `increment` */}
          {page + 4 <= totalPages && (
            <button
              type="button"
              data-test="pagination-skip-increment-button"
              onClick={() => this.setPage(page + 3)}
            >
              ...
            </button>
          )}
          {/* last page button */}
          <button
            data-test="pagination-last-button"
            className={page === totalPages ? styles.active : ''}
            type="button"
            onClick={() => this.setPage(totalPages)}
            aria-label={`page ${totalPages}`}
          >
            {totalPages}
          </button>
          {/* next button */}
          <button
            data-test="pagination-next-button"
            className={styles['prev-next']}
            disabled={page === totalPages}
            type="button"
            onClick={() => this.setPage(page + 1)}
            aria-label="next"
          >
            &gt;
          </button>
        </section>
      )
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
