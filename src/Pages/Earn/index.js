import React, { useEffect } from 'react'
import TabList from '@/Components/TabList'
import { EARN_CONFIG1, EARN_CONFIG2 } from '@/Contanst/list'
import styles from './index.module.scss'

const Earn = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top_wrapper}></div>
      {[EARN_CONFIG1, EARN_CONFIG2].map((item) => {
        return (
          <TabList
            key={item.title}
            list={item.list}
            title={item.title}
            styleType={2}></TabList>
        )
      })}
    </div>
  )
}

export default Earn
