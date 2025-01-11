const behavior = (
  state = {
    clickNum: 0,
  },
  action
) => {
  switch (action.type) {
    case 'SET_ISPOPUPSIGN':
      return {
        ...state,
        isPopUpSign: action.isPopUpSign,
      }
    case 'SET_CLICKNUM':
      return {
        ...state,
        clickNum: action.clickNum,
      }
    case 'SET_ISBUYING':
      return {
        ...state,
        isBuying: action.isBuying,
      }
    case 'SET_SHARECLICKTIME':
      return {
        ...state,
        shareClickTime: action.shareClickTime,
      }
    case 'SET_ISUPDATELOADING':
      return {
        ...state,
        isUpdateLoading: action.isUpdateLoading,
      }
    case 'SET_BEHAVIOR_PROPS':
      return {
        ...state,
        ...action.props,
      }

    default:
      return state
  }
}
export default behavior
