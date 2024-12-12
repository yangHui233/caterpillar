export const USERINFO_INIT = {
  level: 1,
  //   levelImg: 'level1.png',
  coins: 2,
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
  totalMiningEndTime: 1734688800,
  startTime: 1734678000,
  now: 1734680402,
  totalReward: 300000,
  availableReward: 0,
  maxStorageLevel: 2,
}
