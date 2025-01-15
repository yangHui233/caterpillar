import React, { useRef, useState, useEffect } from 'react'
import style from './index.module.scss'

const StorkWrapper = ({
  text,
  fontSize,
  fontFamily,
  fontWeight,
  textWidth,
  fontColorType,
  textWidthPx,
}) => {
  const svgRef = useRef(null)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      // 确保svgRef.current存在并且已经挂载到DOM上
      if (svgRef.current) {
        // 获取SVG内容的高度（这里假设你有一个合适的方法来获取高度）
        const svgHeight = svgRef.current.getBBox().height + 4
        const svgwidth = svgRef.current.getBBox().width + 4
        // 设置SVG的高度
        setHeight(svgHeight)
        setWidth(svgwidth)
      }
    }, 100)
  }, [text, fontSize, fontFamily]) // 如果svgContent变化，重新计算高度

  return (
    <svg
      ref={svgRef}
      class={`${style.text_wrapper} ${style['text_wrapper_' + textWidthPx]}`}
      height={height}
      width={textWidthPx ? 'auto' : textWidth || width}>
      <text
        class={`${style.num} ${style['text_' + fontSize]} ${
          style['text_' + fontColorType]
        }`}
        style={{
          fontFamily: fontFamily || 'Kemco Pixel',
          fontWeight: fontWeight || '700',
        }}
        x="50%"
        y={1.5}
        alignment-baseline="text-before-edge"
        text-anchor="middle">
        {text}
      </text>
    </svg>
  )
}

export default StorkWrapper
