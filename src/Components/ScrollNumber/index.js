import React from 'react'
import ScrollNumberItem from './num'
import { isEmpty } from '@/Utils/util'
import styles from './index.module.scss'

const ScrollNumber = ({ number, defaultSize, isStork }) => {
  if (isEmpty(number)) return ''

  return (
    <div
      className={`${styles.scroll_wrapper} ${
        isStork ? styles.scroll_wrapper_stork : ''
      }`}>
      {number
        .toString()
        .split('')
        .map((numberItem, index) => {
          return (
            <ScrollNumberItem
              key={index}
              value={numberItem}
              defaultSize={defaultSize}
              isStork={isStork}
            />
          )
        })}
    </div>
  )
}

export default ScrollNumber
