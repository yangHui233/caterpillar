import React from 'react'
import style from './index.module.scss'

const Received = ({
  txt = 'The task is completed! Your coin reward isalready paid out.',
}) => {
  return (
    <div className={style.received}>
      <div className={style.copied_icon}></div>
      <div className={style.received_txt}>{txt}</div>
    </div>
  )
}

export default Received
