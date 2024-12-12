import React, { useState } from 'react'
import { connect } from 'react-redux'
import style from './index.module.scss'
import Received from '@/Components/Received'
import storeUtil from '@/Utils/store'
import UseInterval from '@/CommonUse/interVal'
import Button from '@/Components/Button'
import { completeTask, getTaskList } from '@/Helper/apis/earn'

const CONFIG = {
  x: {
    title: 'Follow our X account',
  },
  tg: {
    title: 'Join our TG channel',
  },
}

const ShareDialog = (props = {}) => {
  const { rewardCoins, shareType = 'tg', icon, id } = props
  const [completed, setCompleted] = useState(props.completed)
  const [isLoading, setIsLoading] = useState(false)

  const { isFinished, startFlag } = UseInterval({
    changeArr: [props.shareClickTime[shareType]],
    isStop: () => {
      let time = storeUtil.getShareClickTime()[shareType + id]
      return time && new Date().getTime() - time > 60000
    },
    isStart: () => {
      let time = storeUtil.getShareClickTime()[shareType + id]
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
      // 更新分享页面数据
      getTaskList()
    } catch (err) {}
    setIsLoading(false)
  }

  const handleJoin = () => {
    storeUtil.setShareClickTime({
      ...storeUtil.getShareClickTime(),
      [shareType + id]: new Date().getTime(),
    })
  }

  return (
    <div className={style.wrapper}>
      <div className={`${style.icon} ${style[icon]}`}></div>
      <div className={style.coin_wrapper}>{rewardCoins}</div>
      <div className={style.title}>{CONFIG[shareType].title}</div>
      <div className={style.join} onClick={handleJoin}>
        JOIN
      </div>
      {!completed ? (
        <>
          {!isFinished && startFlag ? (
            <div className={style.loading}>
              Wait 1 minuter for moderation check toclaim the prize
            </div>
          ) : null}
          <Button
            className={`${style.btn} ${startFlag ? style.start : ''}`}
            onClick={handleConfirm}
            isLoading={isLoading}
            disabled={!isFinished}
            txt="CHECK THE TASK"
          />
        </>
      ) : (
        <div className={style.received}>
          <Received />
        </div>
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
