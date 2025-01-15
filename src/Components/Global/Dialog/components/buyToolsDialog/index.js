import React from 'react'
import { connect } from 'react-redux'
import style from './index.module.scss'
import { numSymbol, toPercent } from '@/Utils/util'
import Button from '@/Components/Button'
import StorkWrapper from '@/Components/StorkWrapper'

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
    upDateTemplete = '',
  } = props
  return (
    <div className={style.wrapper}>
      <div className={`${style.icon} ${style[icon]}`}></div>
      <div className={style.title}>{title}</div>
      {type === '2' ? (
        <div className={style['updatedWrapper']}>
          <StorkWrapper
            text={upDateTemplete.replace('X', toPercent(nextVal))}
            fontSize={36}></StorkWrapper>

          <div className={style['up']}></div>
        </div>
      ) : (
        <div className={style['updatedWrapper']}>
          <StorkWrapper
            text={upDateTemplete.replace('X', currentVal)}
            fontSize={36}></StorkWrapper>
          <div className={style['next']}></div>
          <StorkWrapper
            text={upDateTemplete.replace('X', nextVal)}
            fontSize={36}></StorkWrapper>
        </div>
      )}

      <div className={style.hit}>{hit}</div>
      <div className={style.coin_wrapper}>
        <StorkWrapper text={numSymbol(coins)} fontSize={36}></StorkWrapper>
      </div>
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
