import React from 'react'
import { store } from '@/Store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import Dialog from './Dialog'

export default class Global {
  static dialog(options) {
    this.show('dialog', options)
  }

  static show(flag, options) {
    if (document.getElementById('dialogEle')) {
      this.hide(flag)
    }
    let div = document.createElement('div')
    let id = document.createAttribute('id')
    div.setAttributeNode(id)
    document.body.appendChild(div)
    id.value = 'dialogEle'
    ReactDOM.render(
      <Provider store={store}>
        <Dialog {...options} />
      </Provider>,
      div
    )
  }

  static hide(type) {
    let dialogEle = document.getElementById('dialogEle')
    let ele
    switch (type) {
      case 'dialog':
        ele = dialogEle
        break
      default:
        break
    }
    if (ele) {
      try {
        ReactDOM.unmountComponentAtNode(ele)
        document.body.removeChild(ele)
      } catch (error) {}

      return
    }
  }
}
