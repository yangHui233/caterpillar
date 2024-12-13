import React, { Component } from 'react'
import styles from './toast.module.scss'

class Notice extends Component {
  render() {
    const icons = {
      info: 'icon-info-circle-fill',
      success: 'icon-check-circle-fill',
      warning: 'icon-warning-circle-fill',
      error: 'icon-close-circle-fill',
      loading: 'icon-loading',
    }
    const { type, content } = this.props
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
