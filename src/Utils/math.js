import { isEmpty } from './util'

export const add = function (a, b) {
  if (isEmpty(a) || isEmpty(b)) return 0
  if (typeof a == 'number') a += ''
  if (typeof b == 'number') b += ''
  var c, d, e
  try {
    c = a.toString().split('.')[1].length
  } catch (f) {
    c = 0
  }
  try {
    d = b.toString().split('.')[1].length
  } catch (f) {
    d = 0
  }
  return (e = Math.pow(10, Math.max(c, d))), (mul(a, e) + mul(b, e)) / e
}

// a-b
export const sub = function (a, b) {
  if (isEmpty(a) || isEmpty(b)) return 0
  if (typeof a == 'number') a += ''
  if (typeof b == 'number') b += ''
  var c, d, e
  try {
    c = a.toString().split('.')[1].length
  } catch (f) {
    c = 0
  }
  try {
    d = b.toString().split('.')[1].length
  } catch (f) {
    d = 0
  }
  return (e = Math.pow(10, Math.max(c, d))), (mul(a, e) - mul(b, e)) / e
}

// a*b
export const mul = function (a, b = 0) {
  if (isEmpty(a) || isEmpty(b)) return 0
  a = Number(a)
  b = Number(b)
  if (typeof a == 'number') a += ''
  if (typeof b == 'number') b += ''
  var c = 0,
    d = a.toString(),
    e = b.toString()
  try {
    c += d.split('.')[1].length
  } catch (f) {}
  try {
    c += e.split('.')[1].length
  } catch (f) {}
  return (
    (Number(d.replace('.', '')) * Number(e.replace('.', ''))) / Math.pow(10, c)
  )
}

// a/b
export const div = function (a, b) {
  if (isEmpty(a) || isEmpty(b)) return 0
  if (typeof a == 'number') a += ''
  if (typeof b == 'number') b += ''
  var c,
    d,
    e = 0,
    f = 0
  try {
    e = a.toString().split('.')[1].length
  } catch (g) {}
  try {
    f = b.toString().split('.')[1].length
  } catch (g) {}
  return (
    (c = Number(a.toString().replace('.', ''))),
    (d = Number(b.toString().replace('.', ''))),
    mul(c / d, Math.pow(10, f - e))
  )
}
