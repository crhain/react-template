import React from 'react'
import { render } from 'react-dom'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'
import App from '../components/App'

let initialState = {
  user:{
    username: 'Carl',
    userid: 77
  }
}

let store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
