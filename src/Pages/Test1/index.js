import React, { useRef, useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import Toast from '@/Components/Toast'
import ScrollNumber from '@/Components/ScrollNumber'
import { div } from '@/Utils/math'
import style from './index.module.scss'
import { toPercent } from '@/Utils/util'

const Confetti = () => {
  const aniRef = useRef(null)
  const inter = useRef(null)
  let [num, setNum] = useState(81624053456789)

  // useEffect(() => {
  //   Toast.info('', '恭喜你，完成测试！')
  // }, [])
  function shoot() {
    let canvas = aniRef.current
    var scalar = 1
    var pineapple = confetti.shapeFromText({ text: '✨' })

    // you should  only initialize a canvas once, so save this function
    // we'll save it to the canvas itself for the purpose of this demo
    canvas.confetti =
      canvas.confetti || confetti.create(canvas, { resize: true })
    const defaults = {
      spread: 90,
      ticks: 60, // 移动的速度
      // gravity: 0,
      // decay: 0.9,
      startVelocity: 20,
      colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
      flat: true, //是否关闭三维五彩纸屑的倾斜和摆动
      gravity: 0.8,
      origin: { y: 1 },
    }
    canvas.confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.5,
      shapes: ['star'],
    })

    canvas.confetti({
      ...defaults,
      particleCount: 20,
      scalar: 0.25,
      shapes: ['star'],
    })
  }
  useEffect(() => {
    setTimeout(shoot, 0)
    // setTimeout(shoot, 100)
    // setTimeout(shoot, 200)
  }, [])
  const handleCli = (e) => {
    var pineapple = confetti.shapeFromText({
      text: '+1',
      fontFamily: 'SF Pixelate',
      color: '#595c64',
      fontStyle: 'bold',
      scalar: 10,
    })
    let x = e.clientX
    let y = e.clientY
    var screenFullWidth = window.screen.width
    var screenFullHeight = window.screen.height

    console.log(
      e,
      x,
      y,
      screenFullWidth,
      screenFullHeight,
      div(x, screenFullWidth),
      div(y, screenFullHeight)
    )

    confetti({
      particleCount: 100,
      ticks: 50,
      origin: { x: div(x, screenFullWidth), y: div(y, screenFullHeight) },
      shapes: [pineapple],
      gravity: -1,
      startVelocity: 1,
      flat: true,
      scalar: 2,
    })
  }
  return (
    <>
      <div
        onClick={handleCli}
        style={{
          width: '300px',
          height: '500px',
          background: 'red',
          margin: '10px auto',
        }}></div>
      <canvas width={200} height={50} ref={aniRef}></canvas>
    </>
  )
}

export default Confetti
