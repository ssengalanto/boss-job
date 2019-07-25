import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import '../../sass/main.scss'
import styles from './App.module.scss'
import Header from '../Header'
import Filter from '../Filter'
import Jobs from '../Jobs'
import * as actions from '../../store/actions'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ''
    }

    this.searchChangeHandler = this.searchChangeHandler.bind(this)
  }

  componentDidMount() {
    const { onGetInitData } = this.props
    onGetInitData()
  }

  searchKeyDownHandler = e => {
    const { onSearchJobs } = this.props
    if (e.key === 'Enter') {
      onSearchJobs(e.target.value)
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
        </div>
      </div>
    )
  }
}

App.propTypes = {
  onGetInitData: PropTypes.func.isRequired,
  onSearchJobs: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  onGetInitData: () => dispatch(actions.getInitData()),
  onSearchJobs: search => dispatch(actions.searchJobs(search))
})

export default connect(
  null,
  mapDispatchToProps
)(App)
