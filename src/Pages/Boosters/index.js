import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styles from './index.module.scss'
import { getNestedProperty, numSymbol, toPercent } from '@/Utils/util'
import TabList from '@/Components/TabList'
import { BOOSTERS_CONFIG } from '@/Contanst/list'
import {
  buyToolsDialog,
  hideLoading,
  showLoading,
  updateDialog,
} from '@/Components/Global/export'
import $ from '@/Components/Global'
import Toast from '@/Components/Toast'
import storeUtil from '@/Utils/store'
import { UNUPDATE_CONFIG } from '@/Contanst/update'
import { getUpgradeList, handleUpgrade } from '@/Helper/apis/boosters'
import CommonWrapper from '@/Components/CommonWrapper'
import { getUserInfo } from '@/Helper/apis/home'
import StorkWrapper from '@/Components/StorkWrapper'

const Boosters = (props) => {
  let { upgradeInfo = {} } = props

  useEffect(() => {
    storeUtil.setIsBuying(false)
    getUpgradeList()
  }, [])

  useEffect(() => {
    if (!upgradeInfo.energyBonus) {
      showLoading()
    } else {
      hideLoading()
    }
  }, [upgradeInfo.energyBonus])

  const handleItemCli = (item = {}) => {
    let { status } = item
    // 满级或者锁定状态提示无法升级
    if (['full', 'lock', 'lock_limit'].includes(status)) {
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
          let res = await handleUpgrade(item.upGradePort)

          // 更新数据
          getUpgradeList()
          storeUtil.setIsBuying(false)
          $.hide('dialog')
          let updatedTxt = item.updatedTxt

          if (item.type === '2') {
            updatedTxt = updatedTxt.replace('XXX', toPercent(item.nextVal))
          }
          Toast.info(item.icon, updatedTxt)
          // 更新用户当前数据
          const { coins, energyCap, recoveryRate, bonus } = res
          storeUtil.setUserInfo({
            ...storeUtil.getUserInfo(),
            coins,
          })

          // 能量总值更新
          if (energyCap) {
            storeUtil.setEnergyInfo({
              ...storeUtil.getEnergyInfo(),
              energyCap,
            })
          }

          // 能量恢复速度更新
          if (recoveryRate) {
            storeUtil.setEnergyInfo({
              ...storeUtil.getEnergyInfo(),
              rate: recoveryRate,
            })
          }
          // 更新点击相关数据
          if (bonus) {
            storeUtil.setEnergyInfo({
              ...storeUtil.getEnergyInfo(),
              energyCost: bonus.energyCost,
            })
            storeUtil.setEnergyInfo({
              ...storeUtil.getEnergyInfo(),
              favorBonus: bonus.favorBonus,
              coinBonus: bonus.coinBonus,
            })
          }

          if (res.levelUp && res.levelUp.coins) {
            let { coins, oldLevel, newLevel } = res.levelUp || {}
            updateDialog({
              level: oldLevel,
              nextLevel: {
                level: newLevel,
                levelUpCoins: coins,
              },
              handleClose: async () => {
                storeUtil.setIsUpdateLoading(true)
                try {
                  // 更新首页相关数据
                  await getUserInfo()
                } catch (err) {}
                storeUtil.setIsUpdateLoading(false)
                $.hide('dialog')
              },
            })
            return
          }
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
    <CommonWrapper type="boosters">
      <div className={`${styles.wrapper}`}>
        <div className={styles.ani}></div>
        <div className={styles.card}>
          <div className={styles.card_title}>
            <StorkWrapper
              text={'Your Coins Balance'}
              fontSize={28}
              fontFamily={'SF Pixelate'}
              fontColorType="3"></StorkWrapper>
          </div>
          <div className={styles.card_info}>
            <div className={styles.icon}></div>
            <div className={styles.num}>
              <StorkWrapper
                text={numSymbol(upgradeInfo?.coins)}
                fontSize={44}
                fontFamily={'Kemco Pixel'}></StorkWrapper>
              {/* {numSymbol(upgradeInfo.coins)} */}
            </div>
          </div>
        </div>
        <TabList
          list={BOOSTERS_CONFIG.list
            .map((item) => {
              let { fieldConfig = {} } = item || {}
              let currentData = (upgradeInfo || {})[item.field]
              if (!currentData) return null
              let {
                isMax,
                currentLevel,
                upgradeCost,
                buyFavorLimit = 0,
                buyFavorCount = 0,
              } = currentData
              return {
                ...item,
                val: currentLevel,
                coins: upgradeCost,
                status: isMax
                  ? 'full'
                  : upgradeInfo.coins < upgradeCost
                  ? 'lock'
                  : buyFavorLimit > 0 && buyFavorCount <= 0
                  ? 'lock_limit'
                  : '',
                currentVal: getNestedProperty(currentData, fieldConfig.current),
                nextVal: getNestedProperty(currentData, fieldConfig.next),
                buyFavorLimit,
                buyFavorCount,
              }
            })
            .filter(Boolean)}
          title={BOOSTERS_CONFIG.title}
          styleType={1}
          handleItemCli={handleItemCli}></TabList>
      </div>
    </CommonWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    isBuying: state.behavior.isBuying,
    upgradeInfo: state.user.upgradeInfo || {},
  }
}

export default connect(mapStateToProps)(Boosters)
