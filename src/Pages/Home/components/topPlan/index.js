import React from 'react'
import style from './index.module.scss'
import { numSymbol } from '@/Utils/util'

const TopPlan = () => {
  return (
    <div className={style['top-plan']}>
      <div className={style['plan-love']}>
        <div className={style['top-wrapper']}>
          <div className={style['love-icon']}></div>
          <div className={style['num']}>
            <div className={style['num-current']}> {numSymbol(5000)}</div>
            <div className={style['num-all']}>/{numSymbol(50000)}</div>
          </div>
        </div>
        <div className={style['progress']}>
          <div className={style['progress-content']}></div>
        </div>
      </div>
      <div className={style['plan-light']}>
        <div className={style['light']}></div>
        <div className={style['num']}>
          <div className={style['num-current']}>{numSymbol(1000)}</div>
          <div className={style['num-all']}>/{numSymbol(1500)}</div>
        </div>
      </div>
    </div>
  )
}

export default TopPlan
