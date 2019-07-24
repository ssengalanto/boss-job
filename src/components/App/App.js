import React from 'react'

import '../../sass/main.scss'
import styles from './App.module.scss'
import Header from '../Header'

const App = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <Header />
      <div style={{ padding: '10px 20px' }}>
        <p>Please show a list of jobs as per design</p>
      </div>
    </div>
  </div>
)

export default App
