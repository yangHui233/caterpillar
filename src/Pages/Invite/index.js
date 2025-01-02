import React, { useEffect } from 'react'
import TabList from '@/Components/TabList'
import styles from './index.module.scss'
import Toast from '@/Components/Toast'
import copy from 'copy-to-clipboard'
import { connect } from 'react-redux'
import { inviteList } from '@/Helper/apis/invite'
import { numSymbol } from '@/Utils/util'
import CommonWrapper from '@/Components/CommonWrapper'

const Invite = (props = {}) => {
  let { inviteInfo = {} } = props
  const { list = [], getCoins = 0 } = inviteInfo
  // todo

  useEffect(() => {
    handleGetList()
  }, [])

  const handleGetList = async () => {
    await inviteList()
  }

  const handleInvite = () => {
    Toast.info(
      'copied',
      'Invite link copied to clipboard. Send it to frens and receive coin rewards.'
    )
    copy('t.me/mat_dog_test_bot/dogtest2')
  }
  return (
    <CommonWrapper type="invite">
      <div className={styles.wrapper}>
        <div className={styles.top_wrapper}>
          <div className={styles.title}>lnvite frens!</div>
          <div className={styles.nums}>FRENS</div>
          <div className={styles.hit}>
            You'll get {numSymbol(getCoins)} Coins for every invite,
          </div>
        </div>
        <TabList
          list={(list || []).map((item) => {
            return {
              ...item,
              title: item.username,
              icon: 'fren',
              type: 3,
              val: 500, // todo
            }
          })}
          title={`Friend list(${list.length})`}
          styleType={2}>
          <div className={styles.invite_coin}>
            Received:<div className={styles.coin}>{numSymbol(getCoins)}</div>
          </div>
        </TabList>

        {list && list.length === 0 ? (
          <div className={styles.empty}>
            <div className={styles.icon}></div>
            <div>
              We haven't found any users that joined the game with your invite
              code. Invite friends to receive bonuses!
            </div>
          </div>
        ) : (
          ''
        )}

        <div className={styles.invite_btn} onClick={handleInvite}>
          <div className={styles.content}>Invite a fren</div>
        </div>
      </div>
    </CommonWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    inviteInfo: state.user.inviteInfo || {},
  }
}

export default connect(mapStateToProps)(Invite)
