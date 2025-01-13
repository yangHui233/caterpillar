import React from 'react'
import style from './index.module.scss'

const StorkWrapper = ({ text, fontSize, fontFamily }) => {
  let yObj = {
    36: 1.5,
    52: 4,
  }
  return (
    <svg class={style.text_wrapper} height={fontSize} width="auto">
      <text
        class={`${style.num} ${style['text_' + fontSize]}`}
        style={{ fontFamily }}
        x="50%"
        y={yObj[fontSize] || '0'}
        alignment-baseline="text-before-edge"
        text-anchor="start">
        {text}
      </text>
    </svg>
  )
}

export default StorkWrapper
