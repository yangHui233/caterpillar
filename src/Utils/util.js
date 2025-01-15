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

export const secondsToHoursMinutes = (time) => {
  const hours = Math.floor(time / 3600) // 计算小时
  const minutes = Math.floor((time % 3600) / 60) // 计算分钟
  const seconds = Math.floor(time % 60) // 计算剩余的秒数

  // 返回对象包含小时和分钟
  return {
    hours,
    minutes,
    seconds,
  }
}

// 小数转百分数
export const toPercent = (num, fixed = 0) => {
  if (num) {
    return (num * 100).toFixed(fixed) + '%'
  }
  return '0%'
}

// 获取对象中的属性
export function getNestedProperty(obj, keys) {
  try {
    if (!obj || !keys) return ''

    // 初始化当前对象为传入的对象
    let currentObj = obj

    if (typeof keys === 'string') {
      keys = keys.split('.')
    }
    // 遍历所有的键名
    for (let key of keys) {
      // 如果当前对象中有这个键名，则更新当前对象
      if (currentObj[key] !== undefined) {
        currentObj = currentObj[key]
      } else {
        // 如果某一层级不存在，返回 undefined
        return undefined
      }
    }

    // 返回最终访问到的值
    return currentObj
  } catch (err) {
    return ''
  }
}
