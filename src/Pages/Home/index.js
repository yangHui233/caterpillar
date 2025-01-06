import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import styles from './index.module.scss'
import TopPlan from './components/topPlan'
import storeUtil from '@/Utils/store'
import MiningComp from './components/miningComp'
import ScrollNumber from '@/Components/ScrollNumber'
import { isEmpty, numSymbol } from '@/Utils/util'
import {
  hideLoading,
  showLoading,
  updateDialog,
  signInDialog,
} from '@/Components/Global/export'
import { login } from '@/Helper/apis/login'
import { getMining, getUserInfo, upDateClick } from '@/Helper/apis/home'
import { add, div, mul, sub } from '@/Utils/math'
import { MAX_CLICK } from '@/Contanst/baseConfig'
import confetti from 'canvas-confetti'
import CommonWrapper from '@/Components/CommonWrapper'
import { invitePort } from '@/Helper/apis/invite'

const Index = (props) => {
  const interVal = useRef(null)
  // 用户点击延时请求接口标识
  const clickTimeout = useRef(null)

  const [aniClickNum, setAniClickNum] = React.useState(0)

  const lastTouchTime = useRef(0)

  const [isShowLoading, setIsShowLoading] = React.useState(false)

  // 是否正在请求更新数据，防止重复触发更新点击
  const isUpDating = useRef(false)

  let {
    maxLevel = 30,
    level = 1,
    coins = 0,
    nextLevel = {},
    currentFavor = 0,
    energyBonusLevelConf = {},
  } = props.userInfo
  let { coinBonus, favorBonus } = energyBonusLevelConf || {}
  let { clickNum = 0 } = props

  let { requiredFavor } = nextLevel

  // 用户点击，生成的能量 金币 和好感度相关变化
  const handleCLi = (event) => {
    let { energyBonusLevelConf } = storeUtil.getUserInfo()
    let { currentEnergy } = storeUtil.getEnergyInfo()
    let { favorBonus, energyCost } = energyBonusLevelConf || {}
    // 能量消耗完或者好感度到最大值，均不可再点击
    let isUnClick =
      currentEnergy - energyCost * clickNum <= 0 ||
      currentFavor + favorBonus * clickNum >= requiredFavor

    if (isUnClick) return

    handleClickAni(event)

    storeUtil.setClickNum(storeUtil.getClickNum() + 1)

    // 用户停止点击1s钟，则进行一次请求
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current)
    }
    clickTimeout.current = setTimeout(() => {
      handleUpdateClick()
      setAniClickNum(0)
    }, 1000)
  }

  // 用户登陆
  const handleLogin = async () => {
    try {
      if (storeUtil.getToken()) {
        // 先更新用户点击
        await handleUpdateClick('init')
        return
      }
      const res = await login({
        initData: '',
      })

      const { token } = res
      if (token) {
        storeUtil.setToken(token)
        handleUpdateClick('init')

        // 上报邀请
        let { startParam, userId } = storeUtil.getUserInfo()
        if (startParam && startParam != userId) {
          invitePort({ inviterTgId: storeUtil.getUserInfo().startParam })
        }
      }
    } catch (err) {}
  }

  // 处理点击动画
  const handleClickAni = async (event) => {
    let scalar = 4
    var pineapple = confetti.shapeFromText({
      text: '+' + coinBonus,
      fontFamily: 'SF Pixelate',
      color: '#ffdd00',
      fontStyle: 'bold',
      scalar,
    })
    let { clientX, clientY } = event.changedTouches[0] || {}

    var screenFullWidth = window.screen.width
    var screenFullHeight = window.screen.height

    let x = div(clientX, screenFullWidth)
    let y = div(clientY, screenFullHeight)

    confetti({
      particleCount: 1,
      ticks: 50,
      angle: x > 0.5 ? 180 : -180,
      origin: {
        x,
        y,
      },
      shapes: [pineapple],
      gravity: -1,
      startVelocity: 1,
      flat: true,
      scalar,
      zIndex: 100,
    })

    const currentTime = new Date().getTime()
    const timeDifference = currentTime - lastTouchTime.current

    if (timeDifference < 300) {
      // 假设连续点击的间隔小于300毫秒视为连续点击
      setAniClickNum(aniClickNum + 1)
    } else {
      setAniClickNum(0)
    }

    lastTouchTime.current = currentTime
  }
  // 页面加载，需要先获取用户信息，如果没有用户信息，需要登陆完成在进行页面展示
  useEffect(() => {
    handleLogin()

    return () => {
      handleClearInterval()
    }
  }, [])

  useEffect(() => {
    if (props.userInfo.energyBonusLevelConf) {
      setIsShowLoading(false)
    } else {
      setIsShowLoading(true)
    }
  }, [props.userInfo.energyBonusLevelConf])

  // 相关指数发生变化，则实时判断升级，以及进行页面数据的更新
  useEffect(() => {
    let { favorBonus } = props.userInfo.energyBonusLevelConf || {}
    let { currentFavor, nextLevel } = storeUtil.getUserInfo()
    let { requiredFavor } = nextLevel || {}
    if (add(currentFavor, mul(props.clickNum, favorBonus)) >= requiredFavor) {
      // 触发更新点击，接口判断是否升级
      handleUpdateClick()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.clickNum, currentFavor, requiredFavor, favorBonus])

  useEffect(() => {
    if (isShowLoading) {
      showLoading()
    } else {
      hideLoading()
    }
  }, [isShowLoading])

  // 能量自动增长逻辑
  const handleInterval = () => {
    handleClearInterval()
    interVal.current = setInterval(() => {
      let {
        currentEnergy = 0,
        rate,
        energyCost,
        energyCap,
      } = storeUtil.getEnergyInfo()
      currentEnergy = currentEnergy || 0
      let clickNum = storeUtil.getClickNum()
      let clickConsume = mul(clickNum, energyCost)
      let currentEnergyCap = add(energyCap, clickConsume)
      if (isEmpty(currentEnergy) || isEmpty(rate)) {
        handleClearInterval()
        return
      }
      let addNum = add(currentEnergy, rate)
      let currentEnergyAfter =
        addNum >= currentEnergyCap ? sub(energyCap, clickConsume) : addNum

      storeUtil.setEnergyInfo({
        ...storeUtil.getEnergyInfo(),
        currentEnergy: currentEnergyAfter,
      })
      if (currentEnergyAfter === sub(energyCap, clickConsume)) {
        handleClearInterval()
      }
    }, 1000)
  }

  const handleDateInit = (type) => {
    Promise.all([getUserInfo(), getMining()])
      .then(() => {
        setIsShowLoading(false)
        isUpDating.current = false
        handleInterval()

        // 进入页面的情况下，若未签到，则弹出签到弹窗
        if (type === 'init' && !storeUtil.getUserInfo().hasSignedToday) {
          signInDialog()
        }
      })
      .catch(() => {
        isUpDating.current = false
      })
  }

  // 点击数据发生变化，触发的逻辑处理
  useEffect(() => {
    // 当用户点击次数变化时，需要重新计算能量增长
    if (!interVal.current) {
      handleInterval()
    }

    // 当用户点击次数达到上限时，需要更新用户点击次数
    if (props.clickNum >= MAX_CLICK) {
      handleUpdateClick()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.clickNum])

  // 接口请求更新用户点击次数
  const handleUpdateClick = async (type = '') => {
    // 防止重复请求
    if (isUpDating.current) {
      return
    }

    isUpDating.current = true

    let postNum = storeUtil.getClickNum()

    if (postNum <= 0) {
      if (type === 'init') {
        handleDateInit(type)
      }
      isUpDating.current = false
      return
    }

    // 接口请求点击，更新页面数据
    try {
      const res = await upDateClick({
        clicks: postNum,
      })

      let currentClickNum =
        sub(storeUtil.getClickNum(), postNum) > 0
          ? sub(storeUtil.getClickNum(), postNum)
          : 0

      storeUtil.setClickNum(currentClickNum)

      clearInterval(interVal.current)

      let { currentEnergy, energyCap, coins, currentFavor, isNewLevel } = res

      // 需要升级
      if (isNewLevel) {
        const { level, nextLevel } = storeUtil.getUserInfo()
        updateDialog({
          level,
          nextLevel,
        })
        // 清除本地点击
        storeUtil.setClickNum(0)
        // 更新页面数据 重新开启定时器
        handleDateInit(type)
        return
      }

      if (type === 'init') {
        handleDateInit(type)
        return
      }

      storeUtil.setUserInfo({
        ...storeUtil.getUserInfo(),
        coins,
        currentFavor,
      })

      let { rate } = storeUtil.getEnergyInfo()
      storeUtil.setEnergyInfo({
        ...storeUtil.getEnergyInfo(),
        currentEnergy:
          add(rate, currentEnergy) >= energyCap
            ? energyCap
            : add(rate, currentEnergy),
        energyCap,
      })

      isUpDating.current = false

      handleInterval()
    } catch (err) {
      isUpDating.current = false
      handleDateInit(type)
    }
  }

  // 清除能量增长定时器
  const handleClearInterval = () => {
    clearInterval(interVal.current)
    interVal.current = null
  }

  return isShowLoading ? (
    ''
  ) : (
    <CommonWrapper type="home">
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
              <ScrollNumber
                defaultSize={52}
                number={numSymbol(add(coins, mul(coinBonus, clickNum)))}
              />
            </div>
            <div className={styles.level}>
              level {level || 0}/{maxLevel}
            </div>
          </div>

          <div
            className={`${styles.dog_wrapper} ${
              aniClickNum > 8
                ? styles.dog_ani4
                : aniClickNum > 5
                ? styles.dog_ani3
                : aniClickNum > 3
                ? styles.dog_ani2
                : ''
            }`}
            onTouchStart={handleCLi}>
            <div className={`${styles.dog}`}></div>
          </div>

          <div className={styles.calendar} onClick={signInDialog}></div>

          <MiningComp />
        </div>
      </div>
    </CommonWrapper>
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
