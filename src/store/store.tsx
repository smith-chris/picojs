import logger from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import isDev from 'utils/isDev'

import draw, { DrawState, DrawAction } from './draw'
import code, { CodeState, CodeAction } from './code'

declare global {
  type StoreState = {
    readonly draw: DrawState,
    readonly code: CodeState
  }

  type Dispatch = Redux.Dispatch<StoreState>
}

const reducers = combineReducers<StoreState>({
  draw,
  code
})

let store: Redux.Store<StoreState>
if (isDev) {
  store = createStore(
    reducers,
    applyMiddleware(logger)
  )
} else {
  store = createStore(reducers)
}

export default store
