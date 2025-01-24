import ajax from '@/Helper/ajax.js'
import storeUtil from '@/Utils/store'
import { retrieveLaunchParams } from '@telegram-apps/sdk'

export const login = (params, isLoading) => {
  try {
    sessionStorage.clear()
    localStorage.clear()
  } catch (err) {
    console.log(err, 'err======')
  }

  try {
    // const initialDataRaw = retrieveLaunchParams()
    const { initDataRaw, initData } = retrieveLaunchParams()
    const startParam = 111
    console.log(
      `========`,
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
