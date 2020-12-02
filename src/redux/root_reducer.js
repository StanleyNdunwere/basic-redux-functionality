import { combineReducers } from 'redux'
import { playgroundReducer } from "./reducers/playground.reducer"


export default combineReducers({
  playgroundReducer: playgroundReducer
})

