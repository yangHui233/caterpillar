import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import styles from './index.module.scss'
import TopPlan from './components/topPlan'
import storeUtil from '@/Utils/store'
import { setClickNum } from '@/Store/action'
import MiningComp from './components/miningComp'
import ScrollNumber from '@/Components/ScrollNumber'
import { isEmpty, numSymbol } from '@/Utils/util'

const Index = (props) => {
  const interVal = useRef(null)
  let { maxLevel, level, coins, nextLevel = {}, currentFavor } = props.userInfo
  let { energyCap } = props.energyInfo
  let { clickNum } = props

  let { requiredFavor } = nextLevel

  const handleCLi = () => {
    let { clickSpeed, currentFavor, coins } = storeUtil.getUserInfo()
    let { currentEnergy } = storeUtil.getEnergyInfo()
    // click dog
    let isUnClick = currentEnergy - clickSpeed < 0
    console.log('click', isUnClick)
    if (isUnClick) return

    setClickNum(++clickNum)

    storeUtil.setUserInfo({
      ...storeUtil.getUserInfo(),
      coins: coins + clickSpeed,
      currentFavor: currentFavor + clickSpeed,
    })

    storeUtil.setEnergyInfo({
      ...storeUtil.getEnergyInfo(),
      currentEnergy: currentEnergy - clickSpeed,
    })

    console.log('click', props.userInfo)
  }

  useEffect(() => {
    if (currentFavor >= requiredFavor) {
      // update
    }
  }, [currentFavor])

  useEffect(() => {
    interVal.current = setInterval(() => {
      let { currentEnergy, energySpeed } = storeUtil.getEnergyInfo()
      if (isEmpty(currentEnergy) || isEmpty(energySpeed)) {
        handleClearInterval()
        return
      }
      let addNum = currentEnergy + energySpeed
      let currentEnergyAfter = addNum > energyCap ? energyCap : addNum
      storeUtil.setEnergyInfo({
        ...storeUtil.getEnergyInfo(),
        currentEnergy: currentEnergyAfter,
      })
      if (currentEnergyAfter === energyCap) {
        handleClearInterval()
      }
    }, 1000)
    return handleClearInterval
  }, [])

  const handleClearInterval = () => {
    clearInterval(interVal.current)
    interVal.current = null
  }

  return (
    <div className={styles.wrapper}>
      <TopPlan></TopPlan>

      <div className={styles.cloud_wrapper}>
        <div className={styles.cloud1}></div>
        <div className={styles.cloud2}></div>
      </div>

      <div className={`${styles.cloud_wrapper} ${styles.cloud_wrapper1}`}>
        <div className={styles.cloud1}></div>
        <div className={styles.cloud2}></div>
      </div>

      <div className={styles.main_wrapper}>
        <div className={styles.level_wrapper}>
          <div className={styles.coin}>
            <ScrollNumber defaultSize={52} number={numSymbol(coins)} />
          </div>
          <div className={styles.level}>
            level {level || 0}/{maxLevel}
          </div>
        </div>
        <div className={styles.dog} onTouchStart={() => handleCLi()}></div>
        <div className={styles.calendar}></div>

        <MiningComp />
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

export default connect(mapStateToProps)(Index)
