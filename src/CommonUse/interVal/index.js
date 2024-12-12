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
  } = props

  const interVal = useRef(null)
  const [isFinished, setIsFinished] = useState(false)
  const [startFlag, setStartFlag] = useState(false)

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
      }
      setIsFinished(isFinished)
    }, 1000)

    return () => {
      clearInterval(interVal.current)
    }
  }, [...changeArr])

  return { isFinished, startFlag }
}

export default UseInterval
