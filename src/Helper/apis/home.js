import ajax from '@/Helper/ajax.js'
import storeUtil from '@/Utils/store'

export const getUserInfo = async (params, isLoading) => {
  const res = await ajax.post('/user/info', params, isLoading)
  storeUtil.setUserInfo({
    ...storeUtil.getUserInfo(),
    ...res,
  })
  return res
}

export const getMining = async (params, isLoading) => {
  const res = await ajax.post('mining/status', params, isLoading)
  storeUtil.setMiningInfo({
    ...storeUtil.getMiningInfo(),
    ...res,
  })
  return res
}
