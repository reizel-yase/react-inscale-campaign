import * as React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import store from './store'
import App from './containers/app'

const ConnectedApp = connect((state) => {
  return state
})(App)

render(
  <App />,
  document.getElementById('app'),
)