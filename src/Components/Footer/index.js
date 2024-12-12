import React, { useState, useEffect } from 'react'
import { jumpUrl } from '@/Utils/common'
import history from '@/Router/history'
import style from './index.module.scss'
import { FOOT } from '@/Contanst/foot'

const Footer = () => {
  const [selectedTab, setSelectedTab] = useState('/Home')

  useEffect(() => {
    setSelectedTab(history.location.pathname)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.pathname])

  const tabCli = (path) => {
    if (history.location.pathname !== path) jumpUrl(path)
  }

  return (
    <div className={`${style['foot-tabs']}`}>
      {FOOT.map((item, index) => {
        return (
          <div
            key={index}
            className={`${style['tab-item']} ${
              selectedTab === item.path ? style['selected'] : ''
            }`}
            onClick={() => tabCli(item.path)}>
            <div
              className={`${style[item.iconName]} ${style['tab-icon']}`}></div>
            <div className={style['tab-title']}>{item.title}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Footer
