import React, { Component } from 'react'
import style from './toast.module.scss'

class ToastBox extends Component {
  constructor() {
    super()
    this.transitionTime = 300
    this.state = { notices: [] }
    this.removeNotice = this.removeNotice.bind(this)
  }

  getNoticeKey() {
    const { notices } = this.state
    return `notice-${new Date().getTime()}-${notices.length}`
  }

  addNotice(notice) {
    const { notices } = this.state
    notice.key = this.getNoticeKey()

    notices[0] = notice

    this.setState({ notices })
    if (notice.duration > 0) {
      setTimeout(() => {
        this.removeNotice(notice.key)
      }, notice.duration)
    }
    return () => {
      this.removeNotice(notice.key)
    }
  }

  removeNotice(key) {
    const { notices } = this.state
    this.setState({
      notices: notices.filter((notice) => {
        if (notice.key === key) {
          if (notice.onClose) setTimeout(notice.onClose, this.transitionTime)
          return false
        }
        return true
      }),
    })
  }

  render() {
    const { notices } = this.state
    const icons = {
      info: 'toast_info',
      success: 'toast_success',
      error: 'toast_error',
      loading: 'toast_loading',
    }
    return (
      <div className={style['toast']}>
        {notices.map((notice) => (
          <div className={style['toast_bg']} key={notice.key}>
            <div className={style['toast_box']}>
              <div
                className={`${style['toast_icon']} ${
                  style[icons[notice.type]]
                }`}></div>
              <div className={style['toast_text']}>{notice.content}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ToastBox
