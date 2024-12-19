import React from 'react'
import { connect } from 'react-redux'
import style from './index.module.scss'
import { numSymbol } from '@/Utils/util'
import ScrollNumber from '@/Components/ScrollNumber'

const TopPlan = (props) => {
  const { userInfo, energyInfo } = props
  const { nextLevel = {}, currentFavor } = userInfo
  const { currentEnergy, energyCap } = energyInfo

  return (
    <div className={style['top-plan']}>
      <div className={style['plan-love']}>
        <div className={style['top-wrapper']}>
          <div className={style['love-icon']}></div>
          <div className={style['num']}>
            <div className={style['num-current']}>
              <ScrollNumber
                className={style['num-current-style']}
                defaultSize={26}
                number={numSymbol(currentFavor)}
              />
            </div>
            <div className={style['num-all']}>
              /{numSymbol(nextLevel.requiredFavor)}
            </div>
          </div>
        </div>
        <div className={style['progress']}>
          <div className={style['progress-content']}></div>
        </div>
      </div>

      <div className={style['plan-light']}>
        <div className={style['light']}></div>
        <div className={style['num']}>
          <div className={style['num-current']}>
            <ScrollNumber defaultSize={28} number={numSymbol(currentEnergy)} />
          </div>
          <div className={style['num-all']}>/{numSymbol(energyCap)}</div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo || {},
    energyInfo: state.user.energyInfo || {},
  }
}

export default connect(mapStateToProps)(TopPlan)
