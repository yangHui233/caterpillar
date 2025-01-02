import React from 'react'
import { connect } from 'react-redux'
import style from './index.module.scss'
import { numSymbol, toPercent } from '@/Utils/util'
import Button from '@/Components/Button'

const buyToolsDialog = (props = {}) => {
  const {
    title,
    icon,
    hit,
    coins,
    handleConfirm = () => {},
    isBuying = false,
    type,
    currentVal = '',
    nextVal = '',
    upDateTemplete,
  } = props
  return (
    <div className={style.wrapper}>
      <div className={`${style.icon} ${style[icon]}`}></div>
      <div className={style.title}>{title}</div>
      {type === '2' ? (
        <div className={style['updatedWrapper']}>
          {upDateTemplete.replace('X', toPercent(nextVal))}
          <div className={style['up']}></div>
        </div>
      ) : (
        <div className={style['updatedWrapper']}>
          {upDateTemplete.replace('X', currentVal)}
          <div className={style['next']}></div>
          {upDateTemplete.replace('X', nextVal)}
        </div>
      )}

      <div className={style.hit}>{hit}</div>
      <div className={style.coin_wrapper}>{numSymbol(coins)}</div>
      <Button onClick={handleConfirm} isLoading={isBuying} txt="UPGRADE" />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    isBuying: state.behavior.isBuying,
  }
}

export default connect(mapStateToProps)(buyToolsDialog)
