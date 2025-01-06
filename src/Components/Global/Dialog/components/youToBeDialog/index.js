import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import style from './index.module.scss'
import Received from '@/Components/Received'
import storeUtil from '@/Utils/store'
import UseInterval from '@/CommonUse/interVal'
import Button from '@/Components/Button'
import { completeTask, getTaskList } from '@/Helper/apis/earn'
import { openLink } from '@telegram-apps/sdk'

const CODEERROR_MSG = "You've written an incorrect code"

const KEY = 'youtobe'
const DELAYTIME = 30

const YouToBeDialog = (props = {}) => {
  const { rewardCoins, id, link } = props
  const [completed, setCompleted] = useState(props.completed)
  const [isLoading, setIsLoading] = useState(false)
  const [isShowSuccess, setIsShowSuccess] = useState(false)
  const [value, setValue] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const inputRef = useRef(null)

  const handleConfirm = async () => {
    if (!value) {
      setErrorMsg(CODEERROR_MSG)
      return
    }
    if (!isFinished) {
      return
    }
    // 请求接口获取金币
    setIsLoading(true)
    try {
      await completeTask(
        {
          taskId: id,
        },
        {
          isHideErrorToast: true,
        }
      )
      setCompleted(true)
      setIsShowSuccess(true)
      // 更新分享页面数据
      getTaskList()
    } catch (err) {
      const { msg } = err || CODEERROR_MSG

      setErrorMsg(msg)
    }

    setIsLoading(false)
  }
  const handleToJump = () => {
    if (!storeUtil.getShareClickTime()[KEY + id]) {
      storeUtil.setShareClickTime({
        ...storeUtil.getShareClickTime(),
        [KEY + id]: new Date().getTime(),
      })
    }

    openLink(link)
  }

  const { isFinished, startFlag, leftTime } = UseInterval({
    changeArr: [(props.shareClickTime || {})[KEY + id]],
    clickTime: (props.shareClickTime || {})[KEY + id],
    delayTime: DELAYTIME,
    isStop: () => {
      let time = (storeUtil.getShareClickTime() || {})[KEY + id]
      return time && new Date().getTime() - time > DELAYTIME * 1000
    },
    isStart: () => {
      let time = (storeUtil.getShareClickTime() || {})[KEY + id]
      return !!time
    },
  })

  useEffect(() => {
    const inputElement = inputRef.current

    if (inputElement) {
      const handleFocus = () => {
        setTimeout(() => {
          inputElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 300)
      }

      inputElement.addEventListener('focus', handleFocus)

      // 清除事件监听器，防止内存泄漏
      return () => {
        inputElement.removeEventListener('focus', handleFocus)
      }
    }
  }, [])

  return (
    <div className={style.wrapper}>
      <div className={`${style.icon}`}></div>
      <div className={style.coin_wrapper}>{rewardCoins}</div>
      <div className={style.title}>Financial Stories That Teach BUY SELL</div>
      {!completed ? (
        <>
          <div className={style.hit}>
            <div className={style.hit_item}>
              <div className={style.hit_num}>1</div>
              <div className={style.hit_wrapper} onClick={handleToJump}>
                <div className={style.hit_wrapper_l}>
                  <div className={style.hit_wrapper_title}>
                    Complete the task via link
                  </div>
                  <div className={style.hit_wrapper_hit}>YOUTUBE SUBSCRIBE</div>
                </div>
                <div className={style.hit_wrapper_icon}></div>
              </div>
            </div>
            <div className={style.hit_item}>
              <div className={style.hit_num}>2</div>
              <div className={`${style.hit_wrapper} ${style.hit_wrapper1}`}>
                Find the secret code in the video and paste it below for task
                verification
              </div>
            </div>
          </div>

          <input
            className={`${style.inputs}`}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter the code"
            ref={inputRef}
          />

          {errorMsg ? <div className={style.tip}>{errorMsg}</div> : ''}

          <Button
            onClick={handleConfirm}
            isLoading={isLoading}
            disabled={!isFinished}
            txt={isFinished || !startFlag ? 'CHECK THE TASK' : leftTime}
          />
        </>
      ) : isShowSuccess ? (
        <Received />
      ) : (
        <div className={style.success}>
          <div className={style.success_txt} onClick={handleToJump}>
            YOUTUBE SUBSCRIBE
          </div>
          <div className={style.success_icon}></div>
        </div>
      )}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    shareClickTime: state.behavior.shareClickTime,
  }
}

export default connect(mapStateToProps)(YouToBeDialog)
