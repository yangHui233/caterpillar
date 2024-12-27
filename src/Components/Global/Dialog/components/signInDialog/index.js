import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import style from './index.module.scss'
import { numSymbol } from '@/Utils/util'
import { signin } from '@/Helper/apis/home'
import confetti from 'canvas-confetti'
import storeUtil from '@/Utils/store'

const SignDialog = (props = {}) => {
  const { hasSignedToday, signinDays, signinConf = {} } = props.userInfo || {}
  const [ani, setAni] = useState(false)
  const aniRef = useRef(null)

  useEffect(() => {
    handleSign()
  }, [hasSignedToday])

  const handleSign = async () => {
    if (!hasSignedToday) {
      await signin()
      storeUtil.setUserInfo({
        ...storeUtil.getUserInfo(),
        hasSignedToday: true,
        signinDays: storeUtil.getUserInfo().signinDays + 1,
      })
      setAni(true)
      setTimeout(() => {
        try {
          let canvas = aniRef.current
          canvas.confetti =
            canvas.confetti || confetti.create(canvas, { resize: true })

          canvas.confetti({
            particleCount: 300,
            angle: 90,
            spread: 180,
            origin: { y: 1.5, x: 0.5 },
            zIndex: 100,
            ticks: 500,
            scalar: 0.7,
          })
        } catch (e) {}
      }, 500)
    }
  }
  return (
    <div className={style.wrapper}>
      <div className={`${style.icon}`}></div>
      <div className={style.title}>Daily reward</div>
      <div className={style.hit}>
        Accrue coins for logging into the game daily without skipping
      </div>
      <div className={style.list_wrapper}>
        {Array.from({ length: 7 }).map((item, index) => {
          return (
            <div
              className={`${style.item} ${
                index < signinDays ? style.active : ''
              } ${index == signinDays - 1 && ani ? style.ani : ''}`}
              key={index}>
              {index < signinDays ? <div className={style.label}></div> : ''}
              {index == signinDays - 1 && ani ? (
                <canvas width={'100%'} height={'100%'} ref={aniRef}></canvas>
              ) : (
                ''
              )}

              <div className={style.item_text}>Day {index + 1}</div>
              <div className={style.item_icon}></div>
              <div className={style.coin}>
                {numSymbol((signinConf.rewards || {})[index + 1] || 0)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo || {},
  }
}

export default connect(mapStateToProps)(SignDialog)
