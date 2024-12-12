import { store } from '@/Store'
import { setUValue } from '@/Store/action'
const storeUtil = {
  setUValue(val) {
    store.dispatch(setUValue(val))
  },
  getUValue() {
    return store.getState().user.u || ''
  },
}

export default storeUtil
