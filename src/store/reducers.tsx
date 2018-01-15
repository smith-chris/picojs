import { combineReducers } from 'redux'
import counter from './counter'

declare global {
  type State = {
    readonly counter: number,
  }

  type Dispatch = Redux.Dispatch<State>
}

const reducers = combineReducers<State>({
  counter
})

export default reducers