import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import $ from '@/Components/Global'
import style from './index.module.scss'
import { numSymbol } from '@/Utils/util'
import storeUtil from '@/Utils/store'
import StorkWrapper from '@/Components/StorkWrapper'

const SignDialog = (props = {}) => {
  const {
    handleConfirm = () => {
      props.handleClose && props.handleClose()
    },
    level,
    nextLevel = {},
    isUpdateLoading,
  } = props

  useEffect(() => {
    storeUtil.setIsUpdateLoading(false)
    return () => {
      storeUtil.setIsUpdateLoading(false)
    }
  }, [])

  return (
    <div className={style.wrapper}>
      <div className={style.update}>
        <div className={style.update_item}>
          <div
            className={style.update_item_icon}
            style={{
              backgroundImage:
                level > 0 && level <= 30
                  ? 'url(' +
                    require('@/Theme/assets/update/before/' + level + '.png')
                      .default +
                    ')'
                  : 'none',
            }}></div>
          <div className={style.update_item_hit}>LVL {level}</div>
        </div>
        <div className={style.link}></div>
        <div className={style.update_item}>
          <div
            className={style.update_item_icon}
            style={{
              backgroundImage:
                nextLevel.level > 0 && nextLevel.level <= 30
                  ? 'url(' +
                    require('@/Theme/assets/update/after/' +
                      nextLevel.level +
                      '.png').default +
                    ')'
                  : 'none',
            }}></div>
          <div className={style.update_item_hit}>LVL {nextLevel.level}</div>
        </div>
      </div>
      <div className={style.title}>NEW PUP</div>
      <div className={style.hit}>
        You have leveled up and unlocked a new pup!
      </div>
      <div className={style.content}>
        <StorkWrapper text={'PRIZE:'} fontSize={36}></StorkWrapper>

        <div className={style.coin_wrapper}>
          <StorkWrapper
            text={numSymbol(nextLevel.levelUpCoins)}
            fontSize={36}></StorkWrapper>
        </div>
      </div>
      <div className={style.hit}>
        The prize in coin tokens that you've won for upgrading this character
      </div>

      <div className={style.btn} onClick={handleConfirm}>
        {isUpdateLoading ? (
          <div className={style.loading}></div>
        ) : (
          'CONTINUE PLAYING'
        )}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    isUpdateLoading: state.behavior.isUpdateLoading,
  }
}

export default connect(mapStateToProps)(SignDialog)
