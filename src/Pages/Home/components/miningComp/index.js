import React, { useEffect, useMemo, useState } from 'react'
import { connect } from 'react-redux'
import styles from './index.module.scss'
import { numSymbol, secondsToHoursMinutes } from '@/Utils/util'
import { add, div, mul, sub } from '@/Utils/math'
import storeUtil from '@/Utils/store'
import { getMining } from '@/Helper/apis/home'

const MiningComp = (props) => {
  const {
    totalMiningEndTime,
    totalMiningStartTime,
    currentMiningTime,
    totalReward,
    receivedReward,
    availableReward,
    maxPeriods,
    isMining,
  } = props.miningInfo || {}

  const [currentCoin, setCurrentCoin] = React.useState(0)
  const [subTime, setSubTime] = React.useState('0')
  const interVal = React.useRef(null)

  // 计算获取当前每个周期的时长
  const stepNum = useMemo(() => {
    return div(sub(totalMiningEndTime, totalMiningStartTime), maxPeriods)
  }, [totalMiningEndTime, totalMiningStartTime, maxPeriods])

  // 当前是否展示开始挖矿按钮
  const isShowStartBtn = useMemo(() => {
    return !isMining && !availableReward
  }, [isMining, availableReward])

  useEffect(() => {
    handleMining()
    return () => {
      handleClearInterval()
    }
  }, [])

  const handleMining = () => {
    // 当前为展示开始挖矿按钮界面
    if (isShowStartBtn) {
      handleClearInterval()
      return
    }

    // 当前为挖矿界面
    handleData()
    if (isMining) {
      handleClearInterval()
      interVal.current = setInterval(async () => {
        let currentMiningTimeAfter = add(currentMiningTime, 1)
        // 到达小周期节点，请求接口更新数据
        if (sub(currentMiningTimeAfter, totalMiningStartTime) % stepNum === 0) {
          // 获取接口数据后，移除定时器，并重新设置定时器
          try {
            await getMining()
            handleClearInterval()
            handleMining()
          } catch (err) {}
        }
        storeUtil.setMiningInfo({
          ...props.miningInfo,
          currentMiningTime: currentMiningTimeAfter,
        })
        handleData()
      }, 1000)
      return
    }

    handleClearInterval()
  }

  const handleClearInterval = () => {
    clearInterval(interVal.current)
    interVal.current = null
  }

  // 处理获取展示字段
  const handleData = () => {
    let allTime = sub(totalMiningEndTime, totalMiningStartTime)
    let currentTime = sub(currentMiningTime, totalMiningStartTime)
    let currentCoin = mul(div(currentTime, allTime), totalReward)
    // 当前金币
    setCurrentCoin(currentCoin)

    // 剩余时间
    let subTime = secondsToHoursMinutes(
      sub(currentMiningTime, totalMiningEndTime)
    )
    setSubTime(
      `${subTime.hours > 0 ? `${subTime.hours}h` : ``} ${subTime.minutes}m`
    )
  }

  return isShowStartBtn ? (
    <div className={`${styles.progress_wrapper} ${styles.progress_start}`}>
      Start Farming
    </div>
  ) : (
    <div className={`${styles.progress_wrapper} ${styles.progress_mining}`}>
      <div className={styles.progress_bar}></div>
      <div
        className={`${styles.progress} ${
          availableReward ? styles.progress1 : ''
        }`}>
        <div className={styles.progress_current}>
          <div className={styles.progress_coin}></div>
          <div className={styles.progress_hit}>
            {currentCoin}/{totalReward}
          </div>
        </div>
        <div className={styles.progress_left}>{subTime}</div>
      </div>
      {availableReward ? (
        <div className={styles.getbtn}>
          <div>Harvestable</div>
          <div>{availableReward}</div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    miningInfo: state.user.miningInfo || {},
  }
}

export default connect(mapStateToProps)(MiningComp)
