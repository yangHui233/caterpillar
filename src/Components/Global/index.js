import React from 'react'
import { store } from '@/Store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import Dialog from './Dialog'
import Loading from './Dialog/components/loading'

const COMMONFIELD = 'Ele'

export default class Global {
  static dialog(options) {
    this.show('dialog', options)
  }
  static loading(options) {
    this.show('loading', options)
  }
  static hideLoading() {
    this.hide('loading')
  }

  static show(flag, options) {
    let currentId = flag + COMMONFIELD
    if (document.getElementById(currentId)) {
      this.hide(flag)
    }
    let div = document.createElement('div')
    let id = document.createAttribute('id')
    div.setAttributeNode(id)
    document.body.appendChild(div)
    id.value = currentId
    ReactDOM.render(
      <Provider store={store}>
        {flag === 'dialog' ? <Dialog {...options} /> : <Loading {...options} />}
      </Provider>,
      div
    )
  }

  static hide(type) {
    let currentId = type + COMMONFIELD
    let currentEle = document.getElementById(currentId)

    if (currentEle) {
      try {
        if (type === 'dialog') {
          currentEle.children[0].classList.add('caterpillar_dialog_hide')
        }

        setTimeout(() => {
          ReactDOM.unmountComponentAtNode(currentEle)
          document.body.removeChild(currentEle)
        }, 300)
      } catch (error) {}

      return
    }
  }
}
