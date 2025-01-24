import React, { useEffect } from 'react'
import TabList from '@/Components/TabList'
import styles from './index.module.scss'
import Toast from '@/Components/Toast'
import copy from 'copy-to-clipboard'
import { connect } from 'react-redux'
import { inviteList } from '@/Helper/apis/invite'
import { numSymbol } from '@/Utils/util'
import CommonWrapper from '@/Components/CommonWrapper'
import storeUtil from '@/Utils/store'
import { jumpUrl } from '@/Utils/common'
import StorkWrapper from '@/Components/StorkWrapper'
// import { shareURL } from '@telegram-apps/sdk'

const Invite = (props = {}) => {
  let { inviteInfo = {} } = props
  let { list, totalCoins = 0, inviteRewardCoins = '', total = 0 } = inviteInfo

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
    let userId = storeUtil.getUserInfo().userId
    // if (shareURL.isAvailable()) {
    //   shareURL('https://t.me/heyqbnk', 'Check out this cool group!')
    // }
    copy(
      'https://t.me/thepup_bot/pupu?startapp=share' +
        new Date().getTime() +
        '_' +
        userId
    )
  }

  return (
    <CommonWrapper type="invite">
      <div className={styles.wrapper}>
        <div className={styles.top_wrapper}>
          <div className={styles.title}>lnvite frens!</div>
          <div className={styles.nums}>
            <StorkWrapper text={`${total} FRENS`} fontSize={36}></StorkWrapper>
          </div>
          <div className={styles.hit}>
            You'll get <span>{numSymbol(inviteRewardCoins)}</span> Coins for
            every invite,
          </div>
        </div>
        <TabList
          list={(list || []).map((item) => {
            return {
              ...item,
              title: item.username,
              icon: 'fren',
              type: 3,
              val: item.coins,
            }
          })}
          title={`Friend list(${list ? list.length : 0})`}
          styleType={2}
          isHideRight={true}
          handleItemCli={() => jumpUrl('/Test1')}>
          <div className={styles.invite_coin}>
            Received:<div className={styles.coin}>{numSymbol(totalCoins)}</div>
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
