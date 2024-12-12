import { combineReducers } from 'redux'
import behavior from './behavior'
import system from './system'
import user from './user'

export default combineReducers({
  behavior,
  system,
  user,
})
