import logger from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import isDev from 'utils/isDev'

import draw, { DrawState } from './draw'
import code, { CodeState, CodeDispatch } from './code'

declare global {
  type StoreState = {
    readonly draw: DrawState,
    readonly code: CodeState
  }

  type Dispatch = CodeDispatch
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

export const dispatch: Dispatch = (action) => store.dispatch(action)

export default store
