import { combineReducers } from 'redux'
import counter, {CounterState} from './counter'
import draw, {DrawState} from './draw'

declare global {
  type State = {
    readonly counter: CounterState,
    readonly draw: DrawState
  }

  type Dispatch = Redux.Dispatch<State>
}

const reducers = combineReducers<State>({
  counter,
  draw
})

export default reducers