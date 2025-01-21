import { createStore } from 'redux'
import reducers from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'
import { retrieveLaunchParams } from '@telegram-apps/sdk'

let idPre = ''
try {
  // 存储当前登录用户信息
  const initialDataRaw = retrieveLaunchParams()
  const { initData } = initialDataRaw
  idPre = initData.user.id
  console.log('当前登录用户信息===', idPre, initData, initData.user)
} catch (err) {}

const persistConfig = {
  key: 'root_' + idPre,
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)
export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export const persistor = persistStore(store)
