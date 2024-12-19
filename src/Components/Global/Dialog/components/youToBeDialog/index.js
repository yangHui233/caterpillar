import React, { useState } from 'react'
import { connect } from 'react-redux'
import style from './index.module.scss'
import Received from '@/Components/Received'

const YouToBeDialog = (props = {}) => {
  const { coin } = props
  const [status, setStatus] = useState(3)
  const [isLoading, setIsLoading] = useState(false)
  const [value, setValue] = useState('')

  const handleConfirm = () => {
    if (!value) {
      return
    }
    setIsLoading(true)
    // TODO: call api
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }
  return (
    <div className={style.wrapper}>
      <div className={`${style.icon}`}></div>
      <div className={style.coin_wrapper}>{coin}</div>
      <div className={style.title}>Financial Stories That Teach BUY SELL</div>
      {status === 1 ? (
        <>
          <div className={style.hit}>
            <div className={style.hit_item}>
              <div className={style.hit_num}>1</div>
              <div className={style.hit_wrapper}>
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

          {/* 输入框 */}
          <input
            className={style.inputs}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter the code"
          />

          <div
            className={`${style.btn} ${isLoading ? style.disable : ''}`}
            onClick={handleConfirm}>
            CHECK THE TASK
          </div>
        </>
      ) : status === 2 ? (
        <Received />
      ) : (
        <div className={style.success}>
          <div className={style.success_txt}>YOUTUBE SUBSCRIBE</div>
          <div className={style.success_icon}></div>
        </div>
      )}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(YouToBeDialog)
