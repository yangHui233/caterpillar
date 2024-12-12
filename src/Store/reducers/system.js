const system = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SYSTEM_PROPS':
      return {
        ...state,
        ...action.props,
      }
    default:
      return state
  }
}
export default system
