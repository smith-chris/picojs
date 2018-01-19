import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Code.sass'
import { updateTextAction } from 'store/code'
import Editor from './components/Editor'
import Game from './components/Game'
import Console from './components/Console'
import MainLayout from 'components/Layouts/Main'

type Props = StateProps & DispatchProps

type State = {
  messages: string[]
}

class Code extends Component<Props> {
  state: State = {
    messages: []
  }

  log = (value: string) => {
    let { messages } = this.state  
    this.setState({
      messages: [...messages, value]
    })
  }

  reset = () => {
    this.setState({
      messages: []
    })
  }

  handleRun = () => {
    this.reset()
    setTimeout(() => {
      let { log } = this       
      let evalText = `
      let draw, update
      ${this.props.text}
      let __res = {draw: draw, update: update}
      __res
      `
      // tslint:disable-next-line
      let gameCode = eval(evalText)
    })
  }

  render () {
    let { text, updateText } = this.props
    let { messages } = this.state

    return (
      <MainLayout
        footer={<button onClick={this.handleRun}>Run!</button>}
      >
        <div className={styles.Code}>
          <Editor
            onChange={updateText}
            value={text}
          />
          <span className={styles.rightPane}>
            <Game/>
            <Console messages={messages}/>
          </span>
        </div>
      </MainLayout>
    )
  }
}

type StateProps = {
  text: string
}
const mapStateToProps = (state: StoreState): StateProps => {
  return {
    text: state.code.text
  }
}

type DispatchProps = {
  updateText: (value: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    updateText: (value: string) => dispatch(updateTextAction(value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Code)
