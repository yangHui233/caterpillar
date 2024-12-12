/**
 * 用户信息通过这里，例如bankcardlist，phone等
 */
const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_U':
      return {
        ...state,
        u: action.u,
      }
    default:
      return state
  }
}
export default user
