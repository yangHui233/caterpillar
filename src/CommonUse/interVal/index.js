import { div, sub } from '@/Utils/math'
import React, { useState, useEffect, useRef } from 'react'

const UseInterval = (props) => {
  const {
    changeArr,
    isStop = () => {
      return true
    },
    isStart = () => {
      return false
    },
    clickTime = '',
    delayTime = 30,
  } = props

  const interVal = useRef(null)
  const [isFinished, setIsFinished] = useState(false)
  const [startFlag, setStartFlag] = useState(false)
  const [leftTime, setLeftTime] = useState(0)

  useEffect(() => {
    if (interVal.current) {
      clearInterval(interVal.current)
    }
    interVal.current = setInterval(() => {
      let startFlag = isStart()
      setStartFlag(startFlag)
      if (!startFlag) {
        return clearInterval(interVal.current)
      }
      let isFinished = isStop()
      if (isFinished) {
        setStartFlag(false)
        clearInterval(interVal.current)
        setLeftTime(0)
      } else {
        let subTime = Math.ceil(
          sub(delayTime, div(sub(new Date().getTime(), clickTime), 1000))
        )
        setLeftTime(`00:${subTime < 10 ? `0${subTime}` : subTime}`)
      }
      setIsFinished(isFinished)
    }, 1000)

    return () => {
      clearInterval(interVal.current)
    }
  }, [...changeArr])

  return { isFinished, startFlag, leftTime }
}

export default UseInterval
