export const isEmpty = (value) => {
  return value === null || value === undefined || (!value && value !== value)
}

export const numSymbol = (opt, isZero = false) => {
  if (opt) {
    const str = opt + ''
    if (str.indexOf('.') !== -1) {
      const intSum = str
        .substring(0, str.indexOf('.'))
        .replace(/\B(?=(?:\d{3})+$)/g, ',')
      let dot = str.substring(str.length, str.indexOf('.'))

      if (dot.length === 1) {
        dot = dot + '00'
      } else if (dot.length === 2) {
        dot = dot + '0'
      }
      const ret = intSum + dot
      return ret
    }

    const ret = str.replace(/\B(?=(?:\d{3})+$)/g, ',')
    return ret + (isZero ? '.00' : '')
  }

  return isZero ? '0.00' : '0'
}

export const secondsToHoursMinutes = (seconds) => {
  const hours = Math.floor(seconds / 3600) // 计算小时
  const minutes = Math.floor((seconds % 3600) / 60) // 计算分钟

  // 返回对象包含小时和分钟
  return {
    hours,
    minutes,
  }
}

// 小数转百分数
export const toPercent = (num, fixed = 2) => {
  if (num) {
    return (num * 100).toFixed(fixed) + '%'
  }
  return '0%'
}
