/**
 * 用户信息
 */

import { ENERGYINFO_INIT, USERINFO_INIT } from '@/Contanst/storeInit'

const user = (
  state = {
    energyInfo: ENERGYINFO_INIT,
    userInfo: USERINFO_INIT,
  },
  action
) => {
  switch (action.type) {
    case 'SET_U':
      return {
        ...state,
        u: action.u,
      }
    case 'SET_ENERGYINFO': {
      return {
        ...state,
        energyInfo: action.energyInfo,
      }
    }
    case 'SET_USERINFO':
      return {
        ...state,
        userInfo: action.userInfo,
      }
    case 'SET_MININGINFO':
      return {
        ...state,
        miningInfo: action.miningInfo,
      }
    default:
      return state
  }
}
export default user
