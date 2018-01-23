type ColorIndex = number
type BrushSize = number
type SelectionSize = number

export type DrawState = {
  colorIndex: ColorIndex,
  brushSize: BrushSize,
  selectionSize: SelectionSize
}
const initialState: DrawState = {
  colorIndex: 7,
  brushSize: 1,
  selectionSize: 1
}

export type DrawAction
  = { type: 'SelectColorIndex', data: ColorIndex }
  | { type: 'SelectBrushSize', data: BrushSize }
  | { type: 'SelectSelectionSize', data: SelectionSize }

const drawReducer = (state = initialState, action: DrawAction) => {
  switch (action.type) {
    case 'SelectColorIndex':
      return {...state, colorIndex: action.data}
    case 'SelectBrushSize': 
      return {...state, brushSize: action.data}
    case 'SelectSelectionSize': 
      return {...state, selectionSize: action.data}
    default: {
      return state
    }
  }
}

export default drawReducer
