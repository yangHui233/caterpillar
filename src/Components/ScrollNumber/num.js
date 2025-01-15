import React from 'react'
import styles from './index.module.scss'
import { div, mul } from '@/Utils/math'
import StorkWrapper from '@/Components/StorkWrapper'

const PXREM = div(1, 75)
const UNIT = 'rem'

const NumberAnimation = (props) => {
  let { value, defaultSize, isStork } = props

  let fontSize = mul(defaultSize, PXREM) // 1rem = 75pxdefaultSize
  let lineHeight = mul(defaultSize + 2, PXREM)

  const style = {
    lineHeight: lineHeight + UNIT,
    fontSize: fontSize + UNIT,
  }

  if (!/^\d+$/.test(value)) {
    return (
      <div
        className={`${value === ' ' ? styles['empty-wrapper'] : ''} ${
          styles['number-wrap']
        } ${isStork ? styles['stork'] : ''}`}
        style={style}>
        {isStork ? (
          <StorkWrapper
            text={value === ' ' ? '0' : value}
            fontSize={defaultSize}></StorkWrapper>
        ) : value === ' ' ? (
          '0'
        ) : (
          value
        )}
      </div>
    )
  }

  return (
    <div
      className={`${styles['number-animation-wrap']} ${
        styles[`number-animation-wrap-${defaultSize}`]
      } ${isStork ? styles['stork'] : ''}`}>
      <div
        className={`${styles['number-animation-wrap-hidden']}`}
        style={style}>
        {isStork ? (
          <StorkWrapper text={0} fontSize={defaultSize}></StorkWrapper>
        ) : (
          0
        )}
      </div>
      <div
        className={`${styles[`number-animation`]} `}
        style={{
          top: '-' + value * 100 + '%',
        }}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
          return (
            <div key={index} style={style} className={`${styles['number']}`}>
              {isStork ? (
                <StorkWrapper
                  text={index}
                  fontSize={defaultSize}></StorkWrapper>
              ) : (
                index
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NumberAnimation
