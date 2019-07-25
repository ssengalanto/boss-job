import React from 'react'

import styles from './Loader.module.scss'

const Loader = () => {
  const loaders = [
    { id: 'loader-01' },
    { id: 'loader-02' },
    { id: 'loader-03' },
    { id: 'loader-04' },
    { id: 'loader-05' },
    { id: 'loader-06' }
  ]

  return (
    <main className={styles.main}>
      <div className={`${styles.text} loading w-30`} />
      <div className={`${styles.separator} loading`} />
      {loaders.map(load => (
        <div key={load.id} className="job-items-loader">
          <div className={styles['job-title']}>
            <div className={`${styles.title} loading w-60 mr-auto`} />
            <div className={`${styles.title} loading w-30`} />
          </div>
          <div className={styles.details}>
            <div className={styles.column}>
              <div className={`${styles.text} loading w-30 mr-4`} />
              <div className={`${styles.text} loading w-30`} />
            </div>
            <div className={styles.column}>
              <div className={`${styles.text} loading w-30 mr-4`} />
              <div className={`${styles.text} loading w-30`} />
            </div>
          </div>
          <div className={styles.employer}>
            <div className={`${styles.logo} loading mr-1`} />
            <div className={`${styles.title} loading w-50`} />
            <div className={`${styles.text} loading w-30 ml-auto`} />
          </div>
          <div className={`${styles.separator} loading`} />
        </div>
      ))}
    </main>
  )
}

export default Loader
