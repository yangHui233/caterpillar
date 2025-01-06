import React from 'react'
import style from './index.module.scss'
import { numSymbol, toPercent } from '@/Utils/util'

const TabList = (props) => {
  const {
    list = [],
    title = '',
    styleType = 1,
    handleItemCli = () => {},
    isHideRight = false,
  } = props

  return (
    <div className={`${style['tab-list']}`}>
      {title ? <div className={style['title']}>{title}</div> : ''}

      {props.children ? props.children : ''}

      {list && list.length > 0 ? (
        <div
          className={`${style['tab-list-wrapper']} ${
            style['tab-list-wrapper' + styleType]
          }`}>
          {list.map((item) => {
            return (
              <div
                className={style['tab-wrapper']}
                key={item.id}
                onClick={() => handleItemCli(item)}>
                <div className={`${style['tab-l']} ${style[item.icon]}`}></div>
                <div className={style['tab-m']}>
                  <div className={style['tab-title']}>{item.title}</div>

                  <div className={style['tab-hit']}>
                    {item.status === 'full' ? (
                      <div className={style['txt']}>Max.Upgrade</div>
                    ) : (
                      <>
                        {' '}
                        <div className={style['coin']}></div>
                        {['1', '2'].includes(item.type) ? (
                          <>
                            <div className={`${style['txt']} ${style['num']}`}>
                              {numSymbol(item.coins)}
                            </div>
                            <div className={style['up']}></div>
                            <div className={style['txt']}>
                              {item.type === '2'
                                ? toPercent(item.nextVal)
                                : 'level ' + (item.val * 1 + 1)}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className={`${style['txt']} ${style['num']}`}>
                              +{numSymbol(item.val)}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
                {isHideRight ? (
                  ''
                ) : (
                  <div
                    className={`${style['tab-r']} ${style[item.status]}`}></div>
                )}
              </div>
            )
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default TabList
