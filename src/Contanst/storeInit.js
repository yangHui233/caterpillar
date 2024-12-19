export const USERINFO_INIT = {
  level: 1,
  //   levelImg: 'level1.png',
  coins: 2,
  clickSpeed: 1,
  currentFavor: 0,
  nextLevel: {
    level: 2,
    // img: 'level2.png',
    requiredFavor: 10000,
  },
  maxLevel: 30,
  signinDays: 0,
  hasSignedToday: false,
}

export const ENERGYINFO_INIT = {
  currentEnergy: 1000,
  energyCap: 500000,
  energySpeed: 1,
}

export const MININGINFO_INIT = {
  totalMiningEndTime: 0,
  totalMiningStartTime: 0,
  currentMiningTime: 0,
  totalReward: 0,
  receivedReward: 0,
  availableReward: 0,
  maxPeriods: 1,
  isMining: false,
}
