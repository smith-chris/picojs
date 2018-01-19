export type CodeState = {
  text: string
}
const initialState: CodeState = {
  text: ''
}

enum ActionType {
  UPDATE_TEXT = 'UPDATE_TEXT'
}

type Action = {
  type: ActionType,
  data: {
    text?: CodeState['text'],
  }
}

type UpdateTextAction = (text: CodeState['text']) => Action
export const updateTextAction: UpdateTextAction = (text = '') => ({
  type: ActionType.UPDATE_TEXT,
  data: {
    text
  }
})

const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE_TEXT: {
      return {...state, text: action.data.text}
    }
    default: {
      return state
    }
  }
}

export default counterReducer
