import React from 'react'
import style from './index.module.scss'

const TABLIST = [
  {
    title: 'Affection',
    icon: 'a',
    type: '1',
  },
  {
    title: 'Energy Cap',
    icon: 'e',
    type: '1',
  },
  {
    title: 'Recharging Speed',
    icon: 's',
    type: '1',
  },
  {
    title: 'Storage Time',
    icon: 't',
    type: '1',
  },
  {
    title: 'Increase Favorability',
    icon: 'i',
    type: '2',
  },
]

const Tab = () => {
  return (
    <div className={style['tab-list']}>
      <div className={style['title']}>UPGRADES</div>
      {TABLIST.map((item) => {
        return (
          <div className={style['tab-wrapper']} key={item.title}>
            <div className={`${style['tab-l']} ${style[item.icon]}`}></div>
            <div className={style['tab-m']}>
              <div className={style['tab-title']}>{item.title}</div>
              <div className={style['tab-hit']}>
                <div className={style['coin']}></div>
                <div className={style['txt']}></div>
                <div className={style['up']}></div>
                <div className={style['txt']}>
                  {item.type === 2 ? '%' : 'level'}
                </div>
              </div>
            </div>
            <div className={style['tab-r']}></div>
          </div>
        )
      })}
    </div>
  )
}

export default Tab
