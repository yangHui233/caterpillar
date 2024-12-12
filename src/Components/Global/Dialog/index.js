import React from 'react'
import styles from './index.module.scss'

export default class Dialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.params = {
      bodyEl: document.body,
      top: 0,
    }

    this.noWrapperComArr = []
    this.noWrapperAndMaskComArr = ['errorDialog']
  }
  componentDidMount() {
    this.stopBodyScroll(true)
  }
  componentWillUnmount() {
    this.stopBodyScroll(false)
  }
  stopBodyScroll(isFixed) {
    if (isFixed) {
      this.params.top = window.scrollY
      this.params.bodyEl.style.position = 'fixed'
      this.params.bodyEl.style.top = -this.params.top + 'px'
    } else {
      this.params.bodyEl.style.position = ''
      this.params.bodyEl.style.top = ''
      window.scrollTo(0, this.params.top)
    }
  }
  dialogCli(e) {
    // 阻止事件冒泡
    e && e.stopPropagation()
  }
  render() {
    let { noWrapperComArr, noWrapperAndMaskComArr } = this
    let {
      opacity = 0.5,
      dialogName,
      onMaskClick = () => {},
      isNoWrapper,
      dialogClassName = '',
      borderRadius,
      noDefaultBg,
      isCloseBtn = true,
      handleCancel = () => {},
    } = this.props
    let style = {
      background: `rgba(0,0,0,${opacity})`,
    }

    let DialogName = React.lazy(() =>
      import(`./components/${this.state[dialogName] || dialogName}`)
    )

    isNoWrapper = noWrapperComArr.includes(dialogName) ? true : isNoWrapper
    let isNoWrapperAndMaskComArr = noWrapperAndMaskComArr.includes(dialogName)

    return (
      <React.Suspense fallback={<div></div>}>
        {isNoWrapperAndMaskComArr ? (
          <DialogName {...this.props} />
        ) : (
          <div
            className={styles['common-dialogmask']}
            onClick={onMaskClick}
            style={style}>
            {isNoWrapper ? (
              <DialogName {...this.props} />
            ) : (
              <div
                className={`${styles['common-dialog-wrapper']} ${
                  styles[dialogClassName]
                } ${noDefaultBg ? styles['no-bg-wrapper'] : ''}`}
                style={{
                  borderRadius: borderRadius ? borderRadius : 'none',
                }}
                onClick={this.dialogCli.bind(this)}
                id="common-dialog-wrapper">
                {isCloseBtn ? (
                  <div
                    className={styles.close_btn}
                    onClick={handleCancel}></div>
                ) : (
                  ''
                )}
                <DialogName {...this.props} />
              </div>
            )}
          </div>
        )}
      </React.Suspense>
    )
  }
}
