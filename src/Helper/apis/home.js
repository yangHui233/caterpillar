import ajax from '@/Helper/ajax.js'
import storeUtil from '@/Utils/store'

export const getUserInfo = async (params, isLoading = false) => {
  const res = await ajax.get('user/info', params, isLoading)
  storeUtil.setUserInfo({
    ...storeUtil.getUserInfo(),
    ...res,
  })
  storeUtil.setEnergyInfo({
    ...storeUtil.getEnergyInfo(),
    rate: res.energyRecoveryLevelConf.rate,
    energyCap: res.energyCap,
    currentEnergy: res.currentEnergy,
    energyCost: res.energyBonusLevelConf.energyCost,
  })
  return res
}

export const getMining = async (params, isLoading = false) => {
  const res = await ajax.get('mining/status', params, isLoading)

  storeUtil.setMiningInfo({
    ...storeUtil.getMiningInfo(),
    ...res,
  })
  return res
}

export const getMiningReward = async (params, isLoading) => {
  return await ajax.post('mining/claim', params, isLoading)
}

export const startMining = async (params, isLoading) => {
  return await ajax.post('mining/start', params, isLoading)
}

export const upDateClick = async (params, isLoading) => {
  return await ajax.post('user/click', params, isLoading)
}

export const signin = async (params, isLoading) => {
  return await ajax.post('user/signin', params, isLoading)
}
