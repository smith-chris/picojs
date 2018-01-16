export type DrawState = {
  colorIndex: number
}
const initialState: DrawState = {
  colorIndex: 0
}

enum ActionType {
  SELECT_COLOR = 'SELECT_COLOR'
}

type Action = {
  type: ActionType,
  data: {
    colorIndex?: number
  }
}

type SelectColor = (index: number) => Action
export const selectColor: SelectColor = (index = 0) => ({
  type: ActionType.SELECT_COLOR,
  data: {
    colorIndex: index
  }
})

const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SELECT_COLOR: {
      return {...state, colorIndex: action.data.colorIndex}
    }
    default: {
      return state
    }
  }
}

export default counterReducer
