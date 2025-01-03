import ajax from '@/Helper/ajax.js'
import storeUtil from '@/Utils/store'
export const inviteList = async (
  params = {
    page: 1,
    pageSize: 1000,
  },
  isLoading
) => {
  const res = await ajax.get('invite/list', params, isLoading)
  storeUtil.setInviteInfo(res)
  return res
}

export const invitePort = async (params, isLoading) => {
  const res = await ajax.get('invite/report', params, isLoading)

  return res
}
