import ajax from '@/Helper/ajax.js'
import storeUtil from '@/Utils/store'
import { retrieveLaunchParams } from '@telegram-apps/sdk'

export const login = (params, isLoading) => {
  try {
    window.Telegram.WebApp.clearCache()
  } catch (err) {
    console.log(err, 'err======')
  }

  try {
    const initialDataRaw = retrieveLaunchParams()
    const { initDataRaw, initData, startParam } = initialDataRaw
    console.log(
      initialDataRaw,
      initDataRaw,
      `initialDataRaw====: ${JSON.stringify(initialDataRaw)}`,
      `initialDataRaw====: ${initialDataRaw}`,
      `initDataRaw====: ${JSON.stringify(initDataRaw)}`,
      `initData====: ${JSON.stringify(initData)}`,
      `startParam====: ${JSON.stringify(startParam)}`,
      'initialDataRaw===============!!!!'
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
