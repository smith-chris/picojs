export type DrawState = {
  colorIndex: number,
  brushSize: number,
  selectionSize: number
}
const initialState: DrawState = {
  colorIndex: 0,
  brushSize: 1,
  selectionSize: 1
}

enum ActionType {
  SELECT_COLOR = 'SELECT_COLOR',
  SELECT_BRUSH_SIZE = 'SELECT_BRUSH_SIZE',
  SELECT_SELECTION_SIZE = 'SELECT_SELECTION_SIZE'
}

type Action = {
  type: ActionType,
  data: {
    colorIndex?: number,
    brushSize?: number,
    selectionSize?: number
  }
}

type SelectColor = (index: number) => Action
export const selectColor: SelectColor = (index = 0) => ({
  type: ActionType.SELECT_COLOR,
  data: {
    colorIndex: index
  }
})

type SelectBrushSize = (size: number) => Action
export const selectBrushSize: SelectBrushSize = (size = 1) => ({
  type: ActionType.SELECT_BRUSH_SIZE,
  data: {
    brushSize: size
  }
})

type SelectSelectionSize = (size: number) => Action
export const selectSelectionSize: SelectSelectionSize = (size = 1) => ({
  type: ActionType.SELECT_SELECTION_SIZE,
  data: {
    selectionSize: size
  }
})

const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SELECT_COLOR: {
      return {...state, colorIndex: action.data.colorIndex}
    }
    case ActionType.SELECT_BRUSH_SIZE: {
      return {...state, brushSize: action.data.brushSize}
    }
    case ActionType.SELECT_SELECTION_SIZE: {
      return {...state, selectionSize: action.data.selectionSize}
    }
    default: {
      return state
    }
  }
}

export default counterReducer
