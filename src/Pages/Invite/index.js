import React, { useState } from 'react'
import TabList from '@/Components/TabList'
import styles from './index.module.scss'
import Toast from '@/Components/Toast'
import copy from 'copy-to-clipboard'

const Invite = () => {
  const [list, setList] = useState([
    {
      title: 'Jenny',
      type: 3,
      val: 500,
      icon: 'fren',
    },
  ])

  const handleInvite = () => {
    Toast.info(
      'copied',
      'Invite link copied to clipboard. Send it to frens and receive coin rewards.'
    )
    copy('https://www.baidu.com')
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.top_wrapper}>
        <div className={styles.title}>lnvite frens!</div>
        <div className={styles.nums}>FRENS</div>
        <div className={styles.hit}>
          You'll get 50,000 Coins for every invite,
        </div>
      </div>
      <TabList list={list} title={`Friend list(${list.length})`} styleType={2}>
        <div className={styles.invite_coin}>
          Received:<div className={styles.coin}>50,000</div>
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
  )
}
export default Invite
