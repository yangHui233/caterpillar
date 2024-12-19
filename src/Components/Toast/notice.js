import React, { Component } from 'react'
import styles from './toast.module.scss'

class Notice extends Component {
  render() {
    const { type, content, icon } = this.props
    if (['info'].includes(type)) {
      return (
        <div className={`${styles['info']}`}>
          <div className={`${styles[icon]}`}></div>
          <div className={styles['content']}>{content}</div>
          <div className={styles['close']}></div>
        </div>
      )
    }

    const icons = {
      info: 'icon-info-circle-fill',
      loading: 'icon-loading',
    }
    return (
      <div className={`${styles['toast-notice']} ${styles[type]}`}>
        <svg className={styles['icon']} aria-hidden="true">
          <use xlinkHref={`#${icons[type]}`} />
        </svg>
        <span>{content}</span>
      </div>
    )
  }
}

export default Notice
