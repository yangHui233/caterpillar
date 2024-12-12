import ajax from '@/Helper/ajax.js'
import storeUtil from '@/Utils/store'

export const getUpgradeList = async (params, isLoading) => {
  const res = await ajax.get('upgrade/list', params, isLoading)
  storeUtil.setUpgradeInfo(res)
  return res
}

export const handleUpgrade = async (port, params, isLoading) => {
  const res = await ajax.post(port, params, isLoading)
  return res
}
