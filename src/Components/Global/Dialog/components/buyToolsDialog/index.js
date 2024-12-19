import React from 'react'
import { connect } from 'react-redux'
import style from './index.module.scss'

const buyToolsDialog = (props = {}) => {
  const {
    title,
    icon,
    hit,
    coin,
    handleConfirm = () => {},
    isBuying = false,
  } = props
  return (
    <div className={style.wrapper}>
      <div className={`${style.icon} ${style[icon]}`}></div>
      <div className={style.title}>{title}</div>
      <div className={style.hit}>{hit}</div>
      <div className={style.coin_wrapper}>{coin}</div>
      <div className={style.btn} onClick={handleConfirm}>
        {isBuying ? <div className={style.loading}></div> : 'UPGRADE'}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    isBuying: state.behavior.isBuying,
  }
}

export default connect(mapStateToProps)(buyToolsDialog)
