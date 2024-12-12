export const setUValue = (u) => {
  return {
    type: 'SET_U',
    u,
  }
}
export const setBehaviorProps = (props) => {
  return {
    type: 'SET_BEHAVIOR_PROPS',
    props,
  }
}
export const setSystemProps = (props) => {
  return {
    type: 'SET_SYSTEM_PROPS',
    props,
  }
}
