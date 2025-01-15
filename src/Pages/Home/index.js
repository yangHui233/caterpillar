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
import Toast from '@/Components/Toast'
import { login } from '@/Helper/apis/login'
import { getMining, getUserInfo, upDateClick } from '@/Helper/apis/home'
import { add, div, mul, sub } from '@/Utils/math'
import { MAX_CLICK } from '@/Contanst/baseConfig'
import confetti from '@/Utils/confetti'
import CommonWrapper from '@/Components/CommonWrapper'
import { invitePort } from '@/Helper/apis/invite'
import { hapticFeedbackImpactOccurred } from '@telegram-apps/sdk'
import $ from '@/Components/Global'
import StorkWrapper from '@/Components/StorkWrapper'

const ANI_MAX = 8

const Index = (props) => {
  const interVal = useRef(null)
  // 用户点击延时请求接口标识
  const clickTimeout = useRef(null)

  const [aniClickNum, setAniClickNum] = React.useState(0)

  const lastTouchTime = useRef(0)

  const [isShowLoading, setIsShowLoading] = React.useState(false)

  const [isShowBotAni, setIsShowBotAni] = React.useState(false)

  const [isIntervaling, setIsIntervaling] = React.useState(false)

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

  // 震动效果
  const handleVibrate = () => {
    try {
      hapticFeedbackImpactOccurred('medium')
    } catch (err) {
      console.log('Vibration API not supported')
    }
  }

  // 用户点击，生成的能量 金币 和好感度相关变化
  const handleCLi = (event) => {
    console.log('event', event)
    let { energyBonusLevelConf } = storeUtil.getUserInfo()
    let { currentEnergy } = storeUtil.getEnergyInfo()
    let { favorBonus, energyCost } = energyBonusLevelConf || {}
    // 能量消耗完或者好感度到最大值，均不可再点击
    let isEnegyNotEnough = currentEnergy - energyCost * clickNum < energyCost
    let isUnClick =
      isEnegyNotEnough || currentFavor + favorBonus * clickNum >= requiredFavor

    if (isEnegyNotEnough) {
      // Toast.info('', 'Energy not enough')
    }

    if (isUnClick) return

    handleVibrate()

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
    try {
      let scalar = 2.5
      var pineapple = await confetti.shapeFromText({
        text: '+' + coinBonus,
        fontFamily: `Kemco Pixel`,
        color: '#fff',
        scalar,
        strokeStyle: '#FF4D00',
        lineWidth: 3,
      })
      let { clientX, clientY } = event || {}

      var screenFullWidth = document.documentElement.clientWidth
      var screenFullHeight = document.documentElement.clientHeight

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
    } catch (err) {}
  }

  // 设置最后爆炸动效逻辑
  useEffect(() => {
    if (aniClickNum > ANI_MAX && !isShowBotAni) {
      setIsShowBotAni(ANI_MAX)
      setTimeout(() => {
        setIsShowBotAni(-1)
      }, 760)
    }

    if (aniClickNum === 0) {
      setIsShowBotAni(0)
    }
  }, [aniClickNum])

  // 页面加载，需要先获取用户信息，如果没有用户信息，需要登陆完成在进行页面展示
  useEffect(() => {
    handleClearInterval()

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
    if (isIntervaling) {
      return
    }
    setIsIntervaling(true)
    handleClearInterval()
    interVal.current = setInterval(() => {
      setIsIntervaling(false)
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

  const handleDateInit = (type, callback = () => {}) => {
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
      .finally(() => {
        callback && callback()
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

    // 一次只提交最多 MAX_CLICK 次点击
    if (postNum > MAX_CLICK) {
      postNum = MAX_CLICK
    }

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

      let { currentEnergy, energyCap, coins, currentFavor, isNewLevel } = res

      // 需要升级
      if (isNewLevel) {
        const { level, nextLevel } = storeUtil.getUserInfo()
        updateDialog({
          level,
          nextLevel,
          handleClose: () => {
            storeUtil.setIsUpdateLoading(true)
            // 更新页面数据 重新开启定时器
            handleDateInit(type, () => {
              // 清除本地点击
              setTimeout(() => {
                storeUtil.setClickNum(0)
              })

              storeUtil.setIsUpdateLoading(false)
              $.hide('dialog')
            })
          },
        })
        return
      }

      let currentClickNum =
        sub(storeUtil.getClickNum(), postNum) > 0
          ? sub(storeUtil.getClickNum(), postNum)
          : 0

      storeUtil.setClickNum(currentClickNum)

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
          <div className={styles.fix_wrapper}>
            <div className={styles.level_wrapper}>
              <div className={styles.coin}>
                <ScrollNumber
                  defaultSize={52}
                  number={numSymbol(add(coins, mul(coinBonus, clickNum)))}
                  isStork={true}
                />
              </div>

              <div className={styles.level}>
                <StorkWrapper
                  text={
                    level >= maxLevel && currentFavor >= nextLevel.requiredFavor
                      ? 'Max.Upgrade'
                      : `level ${level || 0}/${maxLevel}`
                  }
                  fontSize={36}
                  fontFamily={'SF Pixelate Bold Italic'}
                  fontColorType={2}
                  textWidth={'100%'}></StorkWrapper>
              </div>
            </div>

            <div
              className={`${styles.dog_wrapper} ${
                aniClickNum > ANI_MAX
                  ? styles.dog_ani4
                  : aniClickNum > 5
                  ? styles.dog_ani3
                  : aniClickNum > 3
                  ? styles.dog_ani2
                  : ''
              }`}
              onPointerDown={handleCLi}>
              <div
                className={`${styles.dog}`}
                style={{
                  backgroundImage:
                    level > 0 && level <= maxLevel
                      ? 'url(' +
                        require('@/Theme/assets/' + level + '.png').default +
                        ')'
                      : 'none',
                }}>
                {aniClickNum > ANI_MAX ? (
                  <div className={styles.dog_heart}></div>
                ) : (
                  ''
                )}
              </div>
            </div>
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
