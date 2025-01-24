export const setToken = (token) => {
  return {
    type: 'SET_TOKEN',
    token,
  }
}
export const setUserInfo = (userInfo) => {
  return {
    type: 'SET_USERINFO',
    userInfo,
  }
}
export const setMiningInfo = (miningInfo) => {
  return {
    type: 'SET_MININGINFO',
    miningInfo,
  }
}

export const setIsPopUpSign = (isPopUpSign) => {
  return {
    type: 'SET_ISPOPUPSIGN',
    isPopUpSign,
  }
}
export const setBehaviorProps = (props) => {
  return {
    type: 'SET_BEHAVIOR_PROPS',
    props,
  }
}
export const setSystemProps = (props) => {
  return {
    type: 'SET_SYSTEM_PROPS',
    props,
  }
}

export const setClickNum = (clickNum) => {
  return {
    type: 'SET_CLICKNUM',
    clickNum,
  }
}

export const setIsBuying = (isBuying) => {
  return {
    type: 'SET_ISBUYING',
    isBuying,
  }
}

export const setEnergyInfo = (energyInfo = {}) => {
  return {
    type: 'SET_ENERGYINFO',
    energyInfo,
  }
}

export const setUpgradeInfo = (upgradeInfo = {}) => {
  return {
    type: 'SET_UPGRADEINFO',
    upgradeInfo,
  }
}

export const setShareClickTime = (shareClickTime = {}) => {
  return {
    type: 'SET_SHARECLICKTIME',
    shareClickTime,
  }
}

export const setEarnInfo = (earnInfo = {}) => {
  return {
    type: 'SET_EARNINFO',
    earnInfo,
  }
}

export const setInviteInfo = (inviteInfo = {}) => {
  return {
    type: 'SET_INVITEINFO',
    inviteInfo,
  }
}

export const setIsUpdateLoading = (isUpdateLoading = false) => {
  return {
    type: 'SET_ISUPDATELOADING',
    isUpdateLoading,
  }
}

export const setInitData = (initData) => {
  return {
    type: 'SET_INIT_DATA',
    initData,
  }
}
