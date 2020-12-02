import { createStore, applyMiddleware } from 'redux'
import combineReducers from './root_reducer'
import { logger } from 'redux-logger'

const middleWares = [logger]
const store = createStore(combineReducers, applyMiddleware(...middleWares));

export default store