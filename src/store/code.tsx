export type CodeState = {
  text: string,
  logs: string[]
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
`,
  logs: []
}

enum ActionType {
  UPDATE_TEXT = 'UPDATE_TEXT',
  ADD_LOG = 'ADD_LOG',
  RESET_LOGS = 'RESET_LOGS',
}

type Action = {
  type: ActionType,
  data?: {
    text?: CodeState['text'],
    log?: string
  }
}

type UpdateTextAction = (text: CodeState['text']) => Action
export const updateTextAction: UpdateTextAction = (text = '') => ({
  type: ActionType.UPDATE_TEXT,
  data: {
    text
  }
})

type AddLogAction = (log: Action['data']['log']) => Action
export const addLogAction: AddLogAction = (log = '') => ({
  type: ActionType.ADD_LOG,
  data: {
    log
  }
})

type ResetLogsAction = () => Action
export const resetLogsAction: ResetLogsAction = () => ({
  type: ActionType.RESET_LOGS
})

const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE_TEXT: {
      return {...state, text: action.data.text}
    }
    case ActionType.ADD_LOG: {
      return {...state, logs: [...state.logs, action.data.log]}
    }
    case ActionType.RESET_LOGS: {
      return {...state, logs: []}
    }
    default: {
      return state
    }
  }
}

export default counterReducer
