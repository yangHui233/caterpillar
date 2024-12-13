import React from 'react'
import styles from './index.module.scss'
import Tab from './components/tab'
import { numSymbol } from '@/Utils/util'

export default class Index extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.card_title}>Your Coins Balance</div>
          <div className={styles.card_info}>
            <div className={styles.icon}></div>
            <div className={styles.num}>{numSymbol(4000)} </div>
          </div>
        </div>
        <Tab></Tab>
      </div>
    )
  }
}
