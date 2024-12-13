import React, { useState } from 'react'
import styles from './index.module.scss'
import TopPlan from './components/topPlan'

const Index = () => {
  let [flag, setFlag] = useState(false)
  return (
    <div className={styles.wrapper}>
      <TopPlan></TopPlan>

      <div className={styles.cloud_wrapper}>
        <div className={styles.cloud1}></div>
        <div className={styles.cloud2}></div>
      </div>

      <div className={`${styles.cloud_wrapper} ${styles.cloud_wrapper1}`}>
        <div className={styles.cloud1}></div>
        <div className={styles.cloud2}></div>
      </div>

      <div className={styles.main_wrapper}>
        <div className={styles.level_wrapper}>
          <div className={styles.coin}>5000</div>
          <div className={styles.level}>level 1/30</div>
        </div>
        <div className={styles.dog}></div>
        <div className={styles.calendar}></div>

        {/* progress wrapper */}
        <div className={styles.progress_wrapper}>
          <div className={styles.progress_bar}></div>
          <div className={`${styles.progress} ${flag ? styles.progress1 : ''}`}>
            <div className={styles.progress_current}>
              <div className={styles.progress_coin}></div>
              <div className={styles.progress_hit}>3160000/3490000</div>
            </div>
            <div className={styles.progress_left}>3h 22m</div>
          </div>
          {flag ? (
            <div className={styles.getbtn}>
              <div>Harvestable</div>
              <div>xxx</div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  )
}

export default Index
