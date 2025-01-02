import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import $ from '@/Components/Global'
import style from './index.module.scss'
import { numSymbol } from '@/Utils/util'

const SignDialog = (props = {}) => {
  const {
    handleConfirm = () => {
      $.hide('dialog')
    },
    userInfo = {},
  } = props
  const { nextLevel } = userInfo

  return (
    <div className={style.wrapper}>
      <div className={style.update}>
        <div className={style.update_item}>
          <div className={style.update_item_icon}></div>
          <div className={style.update_item_hit}>LVL {userInfo.level}</div>
        </div>
        <div className={style.link}></div>
        <div className={style.update_item}>
          <div className={style.update_item_icon}></div>
          <div className={style.update_item_hit}>LVL {nextLevel.level}</div>
        </div>
      </div>
      <div className={style.title}>NEW PUP</div>
      <div className={style.hit}>
        You have leveled up and unlocked a new pup!
      </div>
      <div className={style.content}>
        PRIZE:
        <div className={style.coin_wrapper}>
          {numSymbol(nextLevel.levelUpCoins)}
        </div>
      </div>
      <div className={style.hit}>
        The prize in coin tokens that you've won for upgrading this character
      </div>

      <div className={style.btn} onClick={handleConfirm}>
        CONTINUE PLAYING
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo,
  }
}

export default connect(mapStateToProps)(SignDialog)
