import React from 'react'
import ScrollNumberItem from './num'
import { isEmpty } from '@/Utils/util'

const ScrollNumber = ({ number, defaultSize }) => {
  if (isEmpty(number)) return ''
  return number
    .toString()
    .split('')
    .map((numberItem, index) => {
      return (
        <ScrollNumberItem
          key={index}
          value={numberItem}
          defaultSize={defaultSize}
        />
      )
    })
}

export default ScrollNumber
