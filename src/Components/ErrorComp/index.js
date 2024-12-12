import React from 'react'
import style from './index.module.scss'

class ErrorPage extends React.Component {
  render() {
    return (
      <div className={style['errorpage']}>
        <div className={style['icon']}></div>
        <div className={style['txt']}>Connection Failed</div>
        <div className={style['btn']} onClick={() => window.location.reload()}>
          RELOAD BOT
        </div>
      </div>
    )
  }
}

export default ErrorPage
