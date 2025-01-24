import ajax from '@/Helper/ajax.js'
import storeUtil from '@/Utils/store'

export const login = (params, isLoading) => {
  try {
    const { initDataRaw, initData, startParam } = storeUtil.getInitData()
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
    console.log(err, 'err==========')
  }
  // params.debug = true
  return ajax.post('login', params, isLoading)
}
