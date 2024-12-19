import notificationDOM from './notification'

let notification
const notice = (type, content, duration = 2000, onClose, icon = '') => {
  if (!notification) notification = notificationDOM
  if (type === 'hideLoading') {
    return notification.destroy()
  }
  return notification.addNotice({ type, content, duration, onClose, icon })
}

const Toast = {
  info(icon, content, duration, onClose) {
    return notice('info', content, duration, onClose, icon)
  },
  loading(content, duration = 0, onClose) {
    return notice('loading', content, duration, onClose)
  },
  hideLoading() {
    return notice('hideLoading')
  },
}

export default Toast
