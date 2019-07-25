import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import '../../sass/main.scss'
import styles from './App.module.scss'
import Header from '../Header'
import Filter from '../Filter'
import Jobs from '../Jobs'
import Pagination from '../Pagination'
import * as actions from '../../store/actions'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ''
    }

    this.searchChangeHandler = this.searchChangeHandler.bind(this)
    this.searchKeyDownHandler = this.searchKeyDownHandler.bind(this)
  }

  componentDidMount() {
    const { onGetInitState } = this.props
    onGetInitState()
  }

  searchKeyDownHandler(e) {
    const { onJobSearch } = this.props
    if (e.key === 'Enter') {
      onJobSearch(e.target.value)
    }
  }

  searchChangeHandler(e) {
    this.setState({ search: e.target.value })
  }

  render() {
    const { search } = this.state
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header data-test="header-component" />
          <Filter
            data-test="filter-component"
            search={search}
            searchChangeHandler={this.searchChangeHandler}
            searchKeyDownHandler={this.searchKeyDownHandler}
          />
          <Jobs data-test="jobs-component" />
          <Pagination />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  onGetInitState: PropTypes.func.isRequired,
  onJobSearch: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  onGetInitState: () => dispatch(actions.getInitData()),
  onJobSearch: search => dispatch(actions.jobSearch(search))
})

export default connect(
  null,
  mapDispatchToProps
)(App)
