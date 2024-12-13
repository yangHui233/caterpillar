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
