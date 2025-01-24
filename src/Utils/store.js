import { store } from '@/Store'
import {
  setToken,
  setMiningInfo,
  setUserInfo,
  setClickNum,
  setIsBuying,
  setEnergyInfo,
  setUpgradeInfo,
  setShareClickTime,
  setEarnInfo,
  setInviteInfo,
  setIsUpdateLoading,
  setInitData,
} from '@/Store/action'
const storeUtil = {
  setToken(val) {
    store.dispatch(setToken(val))
  },
  getToken() {
    return store.getState().user.token || ''
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
  setUpgradeInfo(val) {
    store.dispatch(setUpgradeInfo(val))
  },
  getUpgradeInfo() {
    return store.getState().user.upgradeInfo || {}
  },
  setShareClickTime(val) {
    store.dispatch(setShareClickTime(val))
  },
  getShareClickTime() {
    return store.getState().behavior.shareClickTime || {}
  },
  setEarnInfo(val) {
    store.dispatch(setEarnInfo(val))
  },
  getEarnInfo() {
    return store.getState().user.earnInfo || {}
  },
  setInviteInfo(val) {
    store.dispatch(setInviteInfo(val))
  },
  getInviteInfo() {
    return store.getState().user.inviteInfo || {}
  },
  setIsUpdateLoading(val) {
    store.dispatch(setIsUpdateLoading(val))
  },
  getIsUpdateLoading() {
    return store.getState().behavior.isUpdateLoading
  },
  setInitData(val) {
    store.dispatch(setInitData(val))
  },
  getInitData() {
    return store.getState().user.initData
  },
}

export default storeUtil
