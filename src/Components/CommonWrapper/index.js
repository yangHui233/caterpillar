import React from 'react'
import history from '@/Router/history'
import Footer from '@/Components/Footer'
import style from './index.module.scss'

const CommonWrapper = (props) => {
  const { type } = props
  return (
    <div className={`${style.commonwrapper} ${type ? style[type] : ''}`}>
      {props.children}
      <Footer history={history} />
    </div>
  )
}

export default CommonWrapper
