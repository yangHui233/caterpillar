export const setUValue = (u) => {
  return {
    type: 'SET_U',
    u,
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
