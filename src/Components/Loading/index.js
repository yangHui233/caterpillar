import React from 'react'
import ReactDOM from 'react-dom'
import Toast from './toast'

function createNotification() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const notification = ReactDOM.render(<Toast />, div)
  return {
    addNotice(notice) {
      return notification.addNotice(notice)
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    },
  }
}

let notification
const notice = (type, content, duration = 2000, onClose) => {
  if (!notification) notification = createNotification()
  return notification.addNotice({ type, content, duration, onClose })
}

const Loading = {
  showToast(content, onClose, duration = 3000) {
    return notice('info', content, duration, onClose)
  },
  success(content = 'success', duration, onClose) {
    return notice('success', content, duration, onClose)
  },
  error(content, duration, onClose) {
    return notice('error', content, duration, onClose)
  },
  showLoading(content = 'loading...', duration = 0, onClose) {
    return notice('loading', content, duration, onClose)
  },
  hideLoading() {
    return notification.destroy()
  },
}

export default Loading
