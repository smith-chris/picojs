import { combineReducers } from 'redux'
import draw, { DrawState } from './draw'
import code, { CodeState } from './code'

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

export default reducers