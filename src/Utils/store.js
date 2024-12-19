import { USERINFO_INIT } from '@/Contanst/storeInit'
import { store } from '@/Store'
import {
  setUValue,
  setMiningInfo,
  setUserInfo,
  setClickNum,
  setIsBuying,
  setEnergyInfo,
} from '@/Store/action'
const storeUtil = {
  setUValue(val) {
    store.dispatch(setUValue(val))
  },
  getUValue() {
    return store.getState().user.u || ''
  },
  setMiningInfo(val) {
    store.dispatch(setMiningInfo(val))
  },
  getMiningInfo() {
    return store.getState().user.miningInfo || {}
  },
  setUserInfo(val) {
    store.dispatch(setUserInfo(val))
  },
  getUserInfo() {
    return store.getState().user.userInfo || {}
  },
  setClickNum(val) {
    store.dispatch(setClickNum(val))
  },
  getClickNum() {
    return store.getState().behavior.clickNum || 0
  },
  setIsBuying(val) {
    store.dispatch(setIsBuying(val))
  },
  getIsBuying() {
    return !!store.getState().behavior.isBuying
  },
  setEnergyInfo(val) {
    store.dispatch(setEnergyInfo(val))
  },
  getEnergyInfo() {
    return store.getState().user.energyInfo || {}
  },
}

export default storeUtil
