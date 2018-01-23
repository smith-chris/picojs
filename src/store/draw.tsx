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

type SelectColorIndex = { type: 'SelectColorIndex', data: ColorIndex }
type SelectBrushSize = { type: 'SelectBrushSize', data: BrushSize }
type SelectSelectionSize = { type: 'SelectSelectionSize', data: SelectionSize }

export const drawActions = {
  selectColorIndex: (data: SelectColorIndex['data']): SelectColorIndex => 
    ({type: 'SelectColorIndex', data}),
  selectBrushSize: (data: SelectBrushSize['data']): SelectBrushSize => 
    ({type: 'SelectBrushSize', data}),
  selectSelectionSize: (data: SelectSelectionSize['data']): SelectSelectionSize => 
    ({type: 'SelectSelectionSize', data})
}

export type DrawAction
  = SelectColorIndex
  | SelectBrushSize
  | SelectSelectionSize

type Reducer = (state: DrawState, action: DrawAction) => DrawState
const drawReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SelectColorIndex':
      return {...state, colorIndex: action.data}
    case 'SelectBrushSize': 
      return {...state, brushSize: action.data}
    case 'SelectSelectionSize': 
      return {...state, selectionSize: action.data}
    default: {
      const exhaustiveCheck: never = action
      return state
    }
  }
}

export default drawReducer
