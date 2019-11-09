import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import rootSaga from '../sagas'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()
const middlewares = applyMiddleware(sagaMiddleware)
const store = createStore(
  reducers,
  composeEnhancers(middlewares)
)
sagaMiddleware.run(rootSaga)

export default store