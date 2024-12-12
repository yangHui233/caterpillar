import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styles from './index.module.scss'
import { numSymbol } from '@/Utils/util'
import TabList from '@/Components/TabList'
import { BOOSTERS_CONFIG } from '@/Contanst/list'
import {
  buyToolsDialog,
  hideLoading,
  showLoading,
} from '@/Components/Global/export'
import $ from '@/Components/Global'
import Toast from '@/Components/Toast'
import storeUtil from '@/Utils/store'
import { UNUPDATE_CONFIG } from '@/Contanst/update'
import { getUpgradeList, handleUpgrade } from '@/Helper/apis/boosters'

const Boosters = (props) => {
  let { isBuying, upgradeInfo } = props

  useEffect(() => {
    getUpgradeList()
  }, [])

  useEffect(() => {
    if (!upgradeInfo.energyBonus) {
      showLoading()
    } else {
      hideLoading()
    }
  }, [upgradeInfo])

  const handleItemCli = (item = {}) => {
    let { status } = item
    // 满级或者锁定状态提示无法升级
    if (['full', 'lock'].includes(status)) {
      Toast.info(status, UNUPDATE_CONFIG[status])
      return
    }

    storeUtil.setIsBuying(false)
    buyToolsDialog({
      ...item,
      handleConfirm: async () => {
        if (storeUtil.getIsBuying()) return
        // 请求接口购买升级
        storeUtil.setIsBuying(true)
        try {
          await handleUpgrade(item.upGradePort)
          // 更新数据
          getUpgradeList()
          storeUtil.setIsBuying(false)
          $.hide('dialog')
          Toast.info(item.icon, item.updatedTxt)
        } catch (err) {
          storeUtil.setIsBuying(false)
        }
      },
      handleCancel: () => {
        if (storeUtil.getIsBuying()) return
        $.hide('dialog')
      },
    })
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.ani}></div>
      <div className={styles.card}>
        <div className={styles.card_title}>Your Coins Balance</div>
        <div className={styles.card_info}>
          <div className={styles.icon}></div>
          <div className={styles.num}>{numSymbol(upgradeInfo.coins)} </div>
        </div>
      </div>
      <TabList
        list={BOOSTERS_CONFIG.list
          .map((item) => {
            let { fieldConfig = {} } = item
            let currentData = upgradeInfo[item.field]
            if (!currentData) return null
            let { isMax, currentLevel, upgradeCost } = currentData
            return {
              ...item,
              val: currentLevel,
              coins: upgradeCost,
              status: isMax
                ? 'full'
                : upgradeInfo.coins < upgradeCost
                ? 'lock'
                : '',
              currentVal: currentData[fieldConfig.current],
              nextVal: currentData[fieldConfig.next],
            }
          })
          .filter(Boolean)}
        title={BOOSTERS_CONFIG.title}
        styleType={1}
        handleItemCli={handleItemCli}></TabList>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isBuying: state.behavior.isBuying,
    upgradeInfo: state.user.upgradeInfo || {},
  }
}

export default connect(mapStateToProps)(Boosters)
