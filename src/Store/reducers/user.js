/**
 * 用户信息
 */

const user = (
  state = {
    energyInfo: {},
    userInfo: {},
    miningInfo: {},
  },
  action
) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
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
    case 'SET_UPGRADEINFO':
      return {
        ...state,
        upgradeInfo: action.upgradeInfo,
      }
    case 'SET_EARNINFO':
      return {
        ...state,
        earnInfo: action.earnInfo,
      }
    default:
      return state
  }
}
export default user
