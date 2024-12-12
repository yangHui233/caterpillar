import React from 'react'
import ErrorComp from '@/Components/ErrorComp'

export class ErrorBoundary extends React.Component {
  /**
   * 构造函数用于ErrorBoundary组件的初始化
   * @param props - 传递给组件的属性
   * @return 没有返回值
   */
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      Error: null,
      ErrorInfo: null,
    }
  }
  /**
   * 捕获错误并更新状态以指示发生了错误
   * @param error - 发生的错误。
   * @return 更新后的状态，其中hasError设置为true。
   */
  static getDerivedStateFromError(error) {
    console.log('componentDidCatch', error)
    return { hasError: true }
  }
  /**
   * 在渲染过程中捕获错误并使用错误信息更新状态的生命周期
   * @param error - 被捕获的错误。
   * @param errorInfo - 关于错误的额外信息。
   */
  componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch', error, errorInfo)
    this.setState((preState) => ({
      hasError: preState.hasError,
      Error: error,
      ErrorInfo: errorInfo,
    }))
  }
  /**
   * 根据错误状态渲染组件
   * @return 基于错误状态渲染的内容
   */
  render() {
    const { hasError } = this.state
    const { children } = this.props

    // 如果捕获到异常，渲染降级UI
    if (hasError) {
      return <ErrorComp />
    }
    return children
  }
}
