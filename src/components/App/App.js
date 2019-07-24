import React, { Component } from 'react'

import '../../sass/main.scss'
import styles from './App.module.scss'
import Header from '../Header'
import Filter from '../Filter'
import Jobs from '../Jobs'
import staticData from '../../shared/content/static.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ''
    }

    this.searchChangeHandler = this.searchChangeHandler.bind(this)
  }

  searchKeyDownHandler = e => {
    if (e.key === 'Enter') {
      alert(e.target.value)
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
          <Jobs data-test="jobs-component" data={staticData.data} />
        </div>
      </div>
    )
  }
}

export default App
