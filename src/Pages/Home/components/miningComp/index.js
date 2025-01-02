import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import styles from './index.module.scss'
import { numSymbol, secondsToHoursMinutes } from '@/Utils/util'
import { add, div, mul, sub } from '@/Utils/math'
import storeUtil from '@/Utils/store'
import { getMining, getMiningReward, startMining } from '@/Helper/apis/home'
import ScrollNumber from '@/Components/ScrollNumber'

const MiningComp = (props) => {
  const {
    totalMiningEndTime,
    startTime,
    now,
    totalReward,
    availableReward,
    maxStorageLevel,
  } = props.miningInfo || {}

  const [currentCoin, setCurrentCoin] = React.useState(0)
  const [subTime, setSubTime] = React.useState('')
  const interVal = React.useRef(null)

  // 计算获取当前每个周期的时长
  const stepNum = useMemo(() => {
    return div(sub(totalMiningEndTime, startTime), maxStorageLevel)
  }, [totalMiningEndTime, startTime, maxStorageLevel])

  // 当前是否展示开始挖矿按钮
  const isShowStartBtn = useMemo(() => {
    let { totalMiningEndTime, now, availableReward } = storeUtil.getMiningInfo()
    return !(sub(totalMiningEndTime, now) > 0) && !availableReward
  }, [availableReward, totalMiningEndTime, now])

  useEffect(() => {
    handleMining()
    return () => {
      handleClearInterval()
    }
  }, [isShowStartBtn])

  // 开始挖矿
  const hanleStartMining = async () => {
    await startMining()
    await getMining()
    handleMining()
  }

  const handleMining = () => {
    // 当前为展示开始挖矿按钮界面
    if (isShowStartBtn) {
      handleClearInterval()
      return
    }

    // 当前为挖矿界面
    handleData()
    let { now, totalMiningEndTime } = storeUtil.getMiningInfo()
    if (sub(totalMiningEndTime, now) > 0) {
      handleClearInterval()

      interVal.current = setInterval(async () => {
        let { now } = storeUtil.getMiningInfo()
        let currentMiningTimeAfter = add(now, 1000)

        // 到达小周期节点，请求接口更新数据
        if (
          sub(currentMiningTimeAfter, startTime) % stepNum === 0 &&
          sub(currentMiningTimeAfter, startTime)
        ) {
          // 获取接口数据后，移除定时器，并重新设置定时器
          try {
            await getMining()
            handleClearInterval()
          } catch (err) {}
        }
        storeUtil.setMiningInfo({
          ...props.miningInfo,
          now: currentMiningTimeAfter,
        })
        handleData()
      }, 1000)
      return
    }

    handleClearInterval()
  }

  // 领取奖励
  const handleGetReward = async () => {
    const res = await getMiningReward()
    let { coins } = res

    storeUtil.setUserInfo({
      ...storeUtil.getUserInfo(),
      coins: coins,
    })
    // 重新进行挖矿
    hanleStartMining()
  }

  const handleClearInterval = () => {
    clearInterval(interVal.current)
    interVal.current = null
  }

  // 处理获取展示字段
  const handleData = () => {
    let { now, totalMiningEndTime, totalReward, startTime } =
      storeUtil.getMiningInfo()

    // 剩余时间
    let leftTime = sub(totalMiningEndTime, now)

    // 已完成挖矿的情况
    if (leftTime <= 0) {
      setSubTime('')
      setCurrentCoin(totalReward)
      return
    }

    let allTime = sub(totalMiningEndTime, startTime)
    let currentTime = sub(now, startTime)

    let currentCoin = Math.floor(mul(div(currentTime, allTime), totalReward))
    // 当前金币
    setCurrentCoin(currentCoin)

    let subTime = secondsToHoursMinutes(div(leftTime, 1000))

    setSubTime(
      `${subTime.hours > 0 ? `${subTime.hours}h` : ``} ${
        subTime.minutes > 0 ? `${subTime.minutes}m` : ''
      }`
    )
  }

  const isSplit = availableReward && maxStorageLevel > 1
  const isMining = sub(totalMiningEndTime, now) > 0

  return isShowStartBtn ? (
    <div
      className={`${styles.progress_wrapper} ${styles.progress_start}`}
      onClick={hanleStartMining}>
      Start Farming
    </div>
  ) : (
    <div className={`${styles.progress_wrapper} ${styles.progress_mining}`}>
      <div className={`${styles.progress} ${isSplit ? styles.progress1 : ''}`}>
        <div className={styles.progress_bar_wrapper}>
          <div
            className={styles.progress_bar}
            style={{
              width: `${
                !isMining
                  ? 100
                  : (sub(now, startTime) / sub(totalMiningEndTime, startTime)) *
                    100
              }%`,
            }}></div>
        </div>
        {totalReward === availableReward && maxStorageLevel === 1 ? (
          <div className={styles.progress_full} onClick={handleGetReward}>
            Harvestable <div className={styles.progress_coin}></div>{' '}
            {availableReward}/{totalReward}
          </div>
        ) : (
          <>
            <div className={styles.progress_current}>
              <div className={styles.progress_coin}></div>
              <div className={styles.progress_hit}>
                <ScrollNumber
                  defaultSize={isSplit ? 24 : 28}
                  number={currentCoin}
                />

                <div className={styles.progress_hit1}>/{totalReward}</div>
              </div>
            </div>
            {subTime ? (
              <div className={styles.progress_left}>
                <ScrollNumber
                  defaultSize={isSplit ? 24 : 28}
                  number={subTime}
                />
              </div>
            ) : (
              ''
            )}
          </>
        )}
      </div>
      {isSplit ? (
        <div className={styles.getbtn} onClick={handleGetReward}>
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
