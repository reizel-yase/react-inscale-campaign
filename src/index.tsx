import * as React from 'react'
import * as ReactDom from 'react-dom'
import { Provider, connect } from 'react-redux'
import store from './store'
import App from './containers/app'

const ConnectedApp = connect((state) => {
  return state
})(App)

ReactDom.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root'),
)
