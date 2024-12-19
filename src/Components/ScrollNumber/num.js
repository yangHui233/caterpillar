import React from 'react'
import styles from './index.module.scss'

const PXREM = 0.013333

const NumberAnimation = (props) => {
  const { value, defaultSize } = props

  if (isNaN(value)) {
    //非数字
    return (
      <div className={styles['number-animation-wrap']}>
        <div className={styles['number-animation-wrap-hidden']}>.</div>
        <div className={styles['number-animation']}>
          <div className={styles['number']}>{value}</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${styles['number-animation-wrap']}`}>
      <div
        className={`${styles['number-animation-wrap-hidden']}`}
        style={{
          lineHeight: defaultSize * PXREM + 'rem',
          fontSize: defaultSize * PXREM + 'rem',
        }}>
        0
      </div>
      <div
        className={styles[`number-animation`]}
        style={{
          top: -1 * value * defaultSize * PXREM + 'rem',
        }}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
          return (
            <div
              key={index}
              style={{
                lineHeight: defaultSize * PXREM + 'rem',
                fontSize: defaultSize * PXREM + 'rem',
              }}
              className={`${styles['number']} ${
                styles[`${`font-size-${defaultSize}`}`]
              }`}>
              {index}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NumberAnimation
