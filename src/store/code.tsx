export type CodeState = {
  text: string
}
const initialState: CodeState = {
  text: `log("hello world!")

let dot = spr()
dot.x = 64
dot.y = 64
stage.addChild(dot)

update = () => {
  dot.rotation += .1
}
`
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
