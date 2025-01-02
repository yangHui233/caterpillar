export const BOOSTERS_CONFIG = {
  title: 'Boosters',
  list: [
    {
      field: 'energyBonus',
      title: 'Affection',
      icon: 'affection',
      type: '1',
      hit: 'Purchased "Favorability Potion" to increase the benefit of a single click.',
      updatedTxt:
        'Purchased "Favorability Boost". Now your earnings per click limit has been increased.',
      upDateTemplete: '+X',
      fieldConfig: {
        current: 'currentBonus',
        next: 'nextBonus',
      },
      upGradePort: 'upgrade/energy-bonus',
    },
    {
      field: 'energyCap',
      title: 'Energy Cap',
      icon: 'energy',
      type: '1',
      hit: 'Purchased "Energy Strengthening Potion" to increase your energy capacity.',
      updatedTxt:
        'Purchased "Energy Limit Boost". Now your energy limit has been increased.',
      upDateTemplete: 'X',
      fieldConfig: {
        current: 'currentCapacity',
        next: 'nextCapacity',
      },
      upGradePort: 'upgrade/energy-cap',
    },
    {
      field: 'energyRecovery',
      title: 'Recharging Speed',
      icon: 'speed',
      type: '1',
      hit: 'Purchase "Recharge Potion" to increase the speed of your energy replenishment.',
      updatedTxt:
        'Purchased "Charge Speed Up". Now your charging speed has been increased.',
      upDateTemplete: '+X/S',
      fieldConfig: {
        current: 'currentRate',
        next: 'nextRate',
      },
      upGradePort: 'upgrade/energy-recovery',
    },
    {
      field: 'miningStorage',
      title: 'Storage Time',
      icon: 'time',
      type: '1',
      hit: 'Purchase a Time Potion to increase your mining storage time.',
      updatedTxt:
        'Purchased "Storage Time Boost". Now your storage time has increased.',
      upDateTemplete: 'XH',
      fieldConfig: {
        current: 'currentPeriods',
        next: 'nextPeriods',
      },
      upGradePort: 'upgrade/mining-storage',
    },
    {
      field: 'increaseFavor',
      title: 'Increase Favorability',
      icon: 'increase',
      type: '2',
      hit: 'Purchase a favor potion to increase your favor level.',
      updatedTxt:
        'You have successfully purchased a favor potion, and now your favor level has increased by XXX',
      upDateTemplete: 'X',
      fieldConfig: {
        next: 'increaseFavor',
      },
      upGradePort: 'upgrade/favor',
    },
  ],
}

export const EARN_CONFIG1 = {
  title: 'Pup Youtube',
  list: [
    {
      title: 'Watch Youtube Videos',
      icon: 'youtube',
      type: '1',
      shareType: 'youtube',
    },
    {
      title: 'Watch Youtube Videos',
      icon: 'youtube',
      type: '1',
      shareType: 'youtube',
    },
  ],
}

export const EARN_CONFIG2 = {
  title: 'Tasks list',
  list: [
    {
      title: 'Join our TG channel',
      icon: 'tg',
      type: '1',
      shareType: 'tg',
    },
    {
      title: 'Follow our X account',
      icon: 'x',
      type: '1',
      shareType: 'x',
    },
  ],
}
