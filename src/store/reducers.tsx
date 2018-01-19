import { combineReducers } from 'redux'
import draw, { DrawState } from './draw'
import code, { CodeState } from './code'

declare global {
  type State = {
    readonly draw: DrawState,
    readonly code: CodeState
  }

  type Dispatch = Redux.Dispatch<State>
}

const reducers = combineReducers<State>({
  draw,
  code
})

export default reducers