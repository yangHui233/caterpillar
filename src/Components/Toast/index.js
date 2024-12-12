import { TOAST_DEFAULT_TIME } from '@/Contanst/baseConfig'
import notificationDOM from './notification'

let notification
const notice = (
  type,
  content,
  duration = TOAST_DEFAULT_TIME,
  onClose,
  icon = ''
) => {
  if (!notification) notification = notificationDOM

  return notification.addNotice({ type, content, duration, onClose, icon })
}

const Toast = {
  info(icon, content, onClose, duration) {
    return notice('info', content, duration, onClose, icon)
  },
}

export default Toast
