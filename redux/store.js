import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers' //compilation of reducers

let finalCreateStore = compose(
  applyMiddleware(thunk, logger())
)(createStore)


export default function configureStore(initialState = { user: {} }) {
  return finalCreateStore(rootReducer, initialState)
}
