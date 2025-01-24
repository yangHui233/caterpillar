import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './Router'
import reportWebVitals from './reportWebVitals'
import history from '@/Router/history'
import { store } from '@/Store'
import { ErrorBoundary } from '@/Components/ErrorBoundary'
import '@/Theme/lib.js'
import {
  init,
  mountSwipeBehavior,
  disableVerticalSwipes,
  postEvent,
  retrieveLaunchParams,
} from '@telegram-apps/sdk'

import './index.css'
import { login } from './Helper/apis/login'
import storeUtil from './Utils/store'

if (process.env.NODE_ENV !== 'production' || true) {
  let Vconsole = require('vconsole')
  new Vconsole()
}

React.platformDef = process.env.platformDef

try {
  const initDataRaw = retrieveLaunchParams()
  ;(async () => {
    const res = await login(initDataRaw, {
      initData: '',
    })
    const { token } = res
    storeUtil.setToken(token)
  })()

  init()

  setTimeout(() => {
    postEvent('web_app_expand')
    postEvent('web_app_setup_closing_behavior', {
      need_confirmation: true,
    })
  }, 200)

  // 禁止向下滑动应用程序来隐藏应用程序
  mountSwipeBehavior()
  disableVerticalSwipes()
} catch (e) {}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App history={history} />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
