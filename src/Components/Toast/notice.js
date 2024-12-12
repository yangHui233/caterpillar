import React, { Component } from 'react'
import styles from './toast.module.scss'

class Notice extends Component {
  render() {
    const { type, content, icon, removeNotice, noticeKey } = this.props

    if (['info'].includes(type)) {
      return (
        <div className={`${styles['info']}`}>
          <div className={`${styles[icon]}`}></div>
          <div className={styles['content']}>{content}</div>
          <div
            className={styles['close']}
            onClick={() => {
              removeNotice && removeNotice(noticeKey)
            }}></div>
        </div>
      )
    }

    return ''
  }
}

export default Notice
