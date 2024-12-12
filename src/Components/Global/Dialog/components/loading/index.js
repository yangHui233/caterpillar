import React from 'react'
import style from './index.module.scss'

class Loading extends React.Component {
  render() {
    return (
      <div className={style['loading']}>
        <div className={style['loading__spinner']}></div>
        <div className={style['txt']}>loading...</div>
      </div>
    )
  }
}

export default Loading
