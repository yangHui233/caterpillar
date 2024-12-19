import React, { useState } from 'react'
import { connect } from 'react-redux'
import styles from './index.module.scss'
import { numSymbol } from '@/Utils/util'
import TabList from '@/Components/TabList'
import { BOOSTERS_CONFIG } from '@/Contanst/list'
import { buyToolsDialog } from '@/Components/Global/export'
import $ from '@/Components/Global'
import Toast from '@/Components/Toast'
import storeUtil from '@/Utils/store'
import { UNUPDATE_CONFIG } from '@/Contanst/update'

const Boosters = (props) => {
  let { isBuying } = props
  const [data, setData] = useState({
    coins: 1000,
    AffectionField: {
      upgradeCost: 11000,
      isMax: true,
    },
  })

  const handleItemCli = (item = {}) => {
    let { status } = item
    // 满级或者锁定状态提示无法升级
    if (['full', 'lock'].includes(status)) {
      Toast.info(status, UNUPDATE_CONFIG[status])
      return
    }

    buyToolsDialog({
      ...item,
      handleConfirm: () => {
        // 请求接口购买升级
        storeUtil.setIsBuying(true)
        setTimeout(() => {
          storeUtil.setIsBuying(false)
          $.hide('dialog')
          Toast.info(item.icon, item.updatedTxt)
          // 请求接口更新数据
        }, 2000)
      },
      handleCancel: () => {
        if (isBuying) return
        $.hide('dialog')
      },
    })
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.card_title}>Your Coins Balance</div>
        <div className={styles.card_info}>
          <div className={styles.icon}></div>
          <div className={styles.num}>{numSymbol(data.coins)} </div>
        </div>
      </div>
      <TabList
        list={BOOSTERS_CONFIG.list.map((item) => {
          let { isMax, currentLevel, upgradeCost } = data[item.field] || {}
          return {
            ...item,
            val: currentLevel,
            coin: upgradeCost,
            status: isMax ? 'full' : data.coins < upgradeCost ? 'lock' : '',
          }
        })}
        title={BOOSTERS_CONFIG.title}
        styleType={1}
        handleItemCli={handleItemCli}></TabList>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isBuying: state.behavior.isBuying,
  }
}

export default connect(mapStateToProps)(Boosters)
