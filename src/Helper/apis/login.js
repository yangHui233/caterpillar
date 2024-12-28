import ajax from '@/Helper/ajax.js'
import { retrieveLaunchParams } from '@telegram-apps/sdk'

export const login = (params, isLoading) => {
  try {
    const { initDataRaw } = retrieveLaunchParams()
    params = initDataRaw
  } catch (err) {
    params.debug = true
    console.log(err, 'err')
  }

  return ajax.post('login', params, isLoading)
}
