import React from 'react'
import { connect } from 'react-redux'
import style from './index.module.scss'
import { numSymbol } from '@/Utils/util'
import ScrollNumber from '@/Components/ScrollNumber'
import { add, mul, sub } from '@/Utils/math'

const TopPlan = (props) => {
  const { userInfo, energyInfo, clickNum } = props
  const { nextLevel = {}, currentFavor, energyBonusLevelConf = {} } = userInfo
  let { favorBonus, energyCost } = energyBonusLevelConf || {}
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
                number={numSymbol(add(currentFavor, mul(clickNum, favorBonus)))}
              />
            </div>
            <div className={style['num-all']}>
              /{numSymbol(nextLevel.requiredFavor)}
            </div>
          </div>
        </div>
        <div className={style['progress']}>
          <div
            className={style['progress-content']}
            style={{
              width: `${
                ((currentFavor + clickNum * favorBonus) /
                  nextLevel.requiredFavor) *
                100
              }%`,
            }}></div>
        </div>
      </div>

      <div className={style['plan-light']}>
        <div className={style['light']}></div>
        <div className={style['num']}>
          <div className={style['num-current']}>
            <ScrollNumber
              defaultSize={28}
              number={numSymbol(
                sub(currentEnergy, mul(energyCost, clickNum)) > 0
                  ? sub(currentEnergy, mul(energyCost, clickNum))
                  : 0
              )}
            />
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
    clickNum: state.behavior.clickNum || 0,
  }
}

export default connect(mapStateToProps)(TopPlan)
