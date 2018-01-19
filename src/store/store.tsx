import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import isDev from 'utils/isDev'

let store: Redux.Store<StoreState>
if (isDev) {
  store = createStore(
    rootReducer,
    applyMiddleware(logger)
  )
} else {
  store = createStore(rootReducer)
}
export default store
