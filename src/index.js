import React from 'react'
import ReactDOM from 'react-dom'
import App from './Router'
import reportWebVitals from './reportWebVitals'
import history from '@/Router/history'
import '@/Theme/lib'

import './index.css'

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
