import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Code.sass'
import { updateTextAction } from 'store/code'
import {Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import './picoTheme.global.sass'
import 'codemirror/mode/javascript/javascript'

type Props = StateProps & DispatchProps

class Code extends Component<Props> {
  render () {
    let { text, updateText } = this.props
    return (
      <div className={styles.Code}>
        <CodeMirror
          className={styles.text}
          value={text}
          options={{
            mode: 'javascript',
            theme: 'pico'
          }}
          onBeforeChange={(editor, data, value) => {
            updateText(value)
          }}
        />
      </div>
    )
  }
}

type StateProps = {
  text: string
}
const mapStateToProps = (state: State): StateProps => {
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
