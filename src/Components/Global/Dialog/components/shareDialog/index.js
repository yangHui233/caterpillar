import React, { useState } from 'react'
import { connect } from 'react-redux'
import style from './index.module.scss'
import Received from '@/Components/Received'

const CONFIG = {
  x: {
    title: 'Follow our X account',
  },
  tg: {
    title: 'Join our TG channel',
  },
}

const ShareDialog = (props = {}) => {
  const { coin, type = 'tg' } = props
  const [status, setStatus] = useState(2)
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
      <div className={style.title}>{CONFIG[type].title}</div>
      <div className={style.join}>JOIN</div>
      {status === 1 ? (
        <>
          {isLoading ? (
            <div className={style.loading}>
              Wait 1 minuter for moderation check toclaim the prize
            </div>
          ) : null}
          <div
            className={`${style.btn} ${isLoading ? style.disable : ''}`}
            onClick={handleConfirm}>
            CHECK THE TASK
          </div>
        </>
      ) : status === 2 ? (
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
  return {}
}

export default connect(mapStateToProps)(ShareDialog)
