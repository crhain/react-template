import { combineReducers } from 'redux'
//import seperate reducers here
import mainReducer from './mainReducer'

const rootReducer = combineReducers({
  main: mainReducer
})


export default rootReducer
