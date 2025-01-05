import ajax from '@/Helper/ajax.js'
import storeUtil from '@/Utils/store'
import { retrieveLaunchParams, initDataStartParam } from '@telegram-apps/sdk'

export const login = (params, isLoading) => {
  try {
    const initialDataRaw = retrieveLaunchParams()
    const { initDataRaw, initData, startParam } = initialDataRaw
    console.log(
      initialDataRaw,
      initDataStartParam(),
      'initialDataRaw===========!!!!'
    )
    storeUtil.setUserInfo({
      ...(storeUtil.getUserInfo() || {}),
      userId: initData.user.id,
      startParam: startParam,
    })

    params = {
      initData: initDataRaw,
    }
  } catch (err) {
    params.debug = true
    console.log(err, 'err')
  }
  // params.debug = true

  const res = ajax.post('login', params, isLoading)
  return res
}
