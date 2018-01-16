export type CounterState = number
const initialState: CounterState = 0

enum Action {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  RESET = 'RESET'
}

export const incrementCounter = () => ({
  type: Action.INCREMENT
})

export const decrementCounter = () => ({
  type: Action.DECREMENT
})

export const resetCounter = () => ({
  type: Action.RESET
})

const counterReducer = (state = initialState, action: {type: Action}) => {
  switch (action.type) {
    case Action.INCREMENT: {
      return state + 1
    }
    case Action.DECREMENT: {
      return state - 1
    }
    case Action.RESET: {
      return initialState
    }
    default: {
      return state
    }
  }
}

export default counterReducer
