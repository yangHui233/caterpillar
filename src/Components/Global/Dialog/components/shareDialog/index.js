import React, { useState } from 'react'
import { connect } from 'react-redux'
import style from './index.module.scss'
import Received from '@/Components/Received'
import storeUtil from '@/Utils/store'
import UseInterval from '@/CommonUse/interVal'
import Button from '@/Components/Button'
import { completeTask, getTaskList } from '@/Helper/apis/earn'
import { openTelegramLink, openLink } from '@telegram-apps/sdk'
import { numSymbol } from '@/Utils/util'
import StorkWrapper from '@/Components/StorkWrapper'

const CONFIG = {
  x: {
    title: 'Follow our X account',
  },
  tg: {
    title: 'Join our TG channel',
  },
}

const DELAYTIME = 5

const ShareDialog = (props = {}) => {
  const { rewardCoins, shareType = 'tg', icon, id } = props
  const [completed, setCompleted] = useState(props.completed)
  const [isLoading, setIsLoading] = useState(false)
  const [isShowSuccess, setIsShowSuccess] = useState(false)

  const { isFinished, startFlag, leftTime } = UseInterval({
    changeArr: [(props.shareClickTime || {})[shareType + id]],
    clickTime: (props.shareClickTime || {})[shareType + id],
    delayTime: DELAYTIME,
    isStop: () => {
      let time = (storeUtil.getShareClickTime() || {})[shareType + id]
      return time && new Date().getTime() - time > DELAYTIME * 1000
    },
    isStart: () => {
      let time = (storeUtil.getShareClickTime() || {})[shareType + id]
      return !!time
    },
  })

  const handleConfirm = async () => {
    if (!isFinished) {
      return
    }
    // 请求接口获取金币
    setIsLoading(true)
    try {
      await completeTask({
        taskId: id,
      })
      setCompleted(true)
      setIsShowSuccess(true)
      // 更新分享页面数据
      getTaskList()
    } catch (err) {}
    setIsLoading(false)
  }

  const handleJoin = () => {
    if (!(storeUtil.getShareClickTime() || {})[shareType + id]) {
      storeUtil.setShareClickTime({
        ...storeUtil.getShareClickTime(),
        [shareType + id]: new Date().getTime(),
      })
    }

    if (shareType === 'tg') {
      openTelegramLink(props.link)
      return
    }
    openLink(props.link)
  }

  return (
    <div className={style.wrapper}>
      <div className={`${style.icon} ${style[icon]}`}></div>
      <div className={style.coin_wrapper}>
        <StorkWrapper
          text={numSymbol(rewardCoins)}
          fontSize={36}></StorkWrapper>
      </div>
      <div className={style.title}>{CONFIG[shareType].title}</div>
      <div className={style.join} onClick={handleJoin}>
        JOIN
      </div>
      {!completed ? (
        <>
          {!isFinished && startFlag ? (
            <div className={style.loading}>
              Please wait a minute while we checking the qualification
            </div>
          ) : null}
          <Button
            className={`${style.btn} ${
              !isFinished && startFlag ? style.start : ''
            }`}
            onClick={handleConfirm}
            isLoading={isLoading}
            disabled={!isFinished}
            txt={isFinished || !startFlag ? 'CHECK THE TASK' : leftTime}
          />
        </>
      ) : isShowSuccess ? (
        <div className={style.received}>
          <Received />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    shareClickTime: state.behavior.shareClickTime || {},
  }
}

export default connect(mapStateToProps)(ShareDialog)
