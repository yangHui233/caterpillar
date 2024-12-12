import React from 'react'
import styles from './index.module.scss'

const Button = ({
  isLoading,
  onClick = () => {},
  disabled,
  txt,
  className = '',
}) => {
  return (
    <div
      className={`${styles.btn} ${disabled ? styles.disabled : ''} ${
        isLoading ? styles.loading : ''
      } ${className}`}
      onClick={() => {
        if (!disabled && !isLoading) onClick()
      }}>
      {isLoading ? <div className={styles.loading_icon}></div> : txt}
    </div>
  )
}

export default Button
