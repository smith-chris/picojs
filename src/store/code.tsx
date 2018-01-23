type Text = string
type Log = string

export type CodeState = {
  text: Text,
  logs: Log[]
}
const initialState: CodeState = {
  text: `log("hello world!")\n\nlet dot = spr()\ndot.x = 64\ndot.y = 64
stage.addChild(dot)\n\nupdate = () => {\n  dot.rotation += .1\n}\n`,
  logs: []
}

type UpdateText = { type: 'UpdateText', data: Text }
type AddLog = { type: 'AddLog', data: Log }
type ResetLogs = { type: 'ResetLogs' }

export const codeActions = {
  updateText: (data: UpdateText['data']): UpdateText => 
    ({type: 'UpdateText', data}),
  addLog: (data: AddLog['data']): AddLog => 
    ({type: 'AddLog', data}),
  resetLogs: (): ResetLogs =>
    ({type: 'ResetLogs'})
}

export type CodeAction
  = UpdateText
  | AddLog
  | ResetLogs

type Reducer = (state: CodeState, action: CodeAction) => CodeState
const codeReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UpdateText':
      return {...state, text: action.data}    
    case 'AddLog':
      return {...state, logs: [...state.logs, action.data]}    
    case 'ResetLogs':
      return {...state, logs: []}
    default:
      const exhaustiveCheck: never = action
      return state
  }
}

export default codeReducer
