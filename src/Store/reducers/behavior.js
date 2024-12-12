const behavior = (state = {}, action) => {
  switch (action.type) {
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
