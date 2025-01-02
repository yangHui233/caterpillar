import React from 'react'
import styles from './index.module.scss'
import { div, mul } from '@/Utils/math'

const PXREM = div(1, 75)
const UNIT = 'rem'

const NumberAnimation = (props) => {
  let { value, defaultSize } = props

  let fontSize = mul(defaultSize, PXREM) // 1rem = 75pxdefaultSize

  const style = {
    lineHeight: fontSize + UNIT,
    fontSize: fontSize + UNIT,
  }

  if (!/^\d+$/.test(value)) {
    return (
      <div
        className={`${value === ' ' ? styles['empty-wrapper'] : ''} ${
          styles['number-wrap']
        }`}
        style={style}>
        {value === ' ' ? '0' : value}
      </div>
    )
  }

  return (
    <div
      className={`${styles['number-animation-wrap']} ${
        styles[`number-animation-wrap-${defaultSize}`]
      }`}>
      <div
        className={`${styles['number-animation-wrap-hidden']}`}
        style={style}>
        0
      </div>
      <div
        className={`${styles[`number-animation`]} `}
        style={{
          top: '-' + value * 100 + '%',
        }}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
          return (
            <div key={index} style={style} className={`${styles['number']}`}>
              {index}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NumberAnimation
