import React, { useEffect } from 'react'
import TabList from '@/Components/TabList'
import { connect } from 'react-redux'
import { EARN_CONFIG1, EARN_CONFIG2 } from '@/Contanst/list'
import {
  shareDialog,
  youToBeDialog,
  hideLoading,
  showLoading,
} from '@/Components/Global/export'

import styles from './index.module.scss'
import { getTaskList } from '@/Helper/apis/earn'
import storeUtil from '@/Utils/store'
import CommonWrapper from '@/Components/CommonWrapper'

const Earn = (props) => {
  let { earnInfo = [] } = props

  useEffect(() => {
    handleGetList()
  }, [])

  useEffect(() => {
    let earnInfo = storeUtil.getEarnInfo()

    if (earnInfo && earnInfo.length > 0) {
      hideLoading()
    } else {
      showLoading()
    }
  }, [earnInfo])

  const handleGetList = async () => {
    await getTaskList()
  }

  const handleItemCli = (item) => {
    let { icon } = item

    if (['youtube'].includes(icon)) {
      youToBeDialog({
        ...item,
      })
      return
    }

    shareDialog({
      ...item,
    })
  }

  const handleGetType = (name) => {
    let config = {
      Youtube: 'youtube',
      Telegram: 'tg',
      X: 'x',
    }
    return config[name] || name
  }
  return (
    <CommonWrapper type="earn">
      <div className={`${styles.wrapper} scrollable`}>
        <div className={styles.top_wrapper}></div>
        {(earnInfo || []).map((item) => {
          return (
            <TabList
              key={item.id}
              list={(item.tasks || []).map((item) => {
                return {
                  ...item,
                  title: item.description,
                  icon: handleGetType(item.group.name),
                  // type: '1',
                  shareType: handleGetType(item.group.name),
                  val: item.rewardCoins,
                }
              })}
              title={item.description}
              styleType={2}
              handleItemCli={handleItemCli}></TabList>
          )
        })}
      </div>
    </CommonWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    earnInfo: state.user.earnInfo || [],
  }
}

export default connect(mapStateToProps)(Earn)
