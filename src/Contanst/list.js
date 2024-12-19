export const BOOSTERS_CONFIG = {
  title: 'Boosters',
  list: [
    {
      field: 'AffectionField', // todo====
      title: 'Affection',
      icon: 'affection',
      type: '1',
      hit: 'Purchased "Favorability Potion" to increase the benefit of a single click.',
      updatedTxt:
        'Purchased "Favorability Boost". Now your earnings per click limit has been increased.',
    },
    {
      field: 'energyCap',
      title: 'Energy Cap',
      icon: 'energy',
      type: '1',
      hit: 'Purchased "Energy Strengthening Potion" to increase your energy capacity.',
      updatedTxt:
        'Purchased "Energy Limit Boost". Now your energy limit has been increased.',
    },
    {
      field: 'energyRecovery',
      title: 'Recharging Speed',
      icon: 'speed',
      type: '1',
      hit: 'Purchase "Recharge Potion" to increase the speed of your energy replenishment.',
      updatedTxt:
        'Purchased "Charge Speed Up". Now your charging speed has been increased.',
    },
    {
      field: 'miningStorage',
      title: 'Storage Time',
      icon: 'time',
      type: '1',
      hit: 'Purchase a Time Potion to increase your mining storage time.',
      updatedTxt:
        'Purchased "Storage Time Boost". Now your storage time has increased.',
    },
    {
      field: 'FavorabilityField', // todo===
      title: 'Increase Favorability',
      icon: 'increase',
      type: '2',
      hit: 'Purchase a favor potion to increase your favor level.',
      updatedTxt:
        'You have successfully purchased a favor potion, and now your favor level has increased by 30%.',
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
    },
    {
      title: 'Watch Youtube Videos',
      icon: 'youtube',
      type: '1',
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
    },
    {
      title: 'Follow our X account',
      icon: 'x',
      type: '1',
    },
  ],
}
