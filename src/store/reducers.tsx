import { combineReducers } from 'redux'
import draw, { DrawState } from './draw'

declare global {
  type State = {
    readonly draw: DrawState
  }

  type Dispatch = Redux.Dispatch<State>
}

const reducers = combineReducers<State>({
  draw
})

export default reducers