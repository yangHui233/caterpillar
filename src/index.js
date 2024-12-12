import React from 'react'
import ReactDOM from 'react-dom'
import App from './Router'
import reportWebVitals from './reportWebVitals'
import history from '@/Router/history'

import './index.css'

//此处将平台化配置挂载在React上，项目内用到的时候可以直接获取
React.platformDef = process.env.platformDef

ReactDOM.render(
  <React.StrictMode>
    <App history={history} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
