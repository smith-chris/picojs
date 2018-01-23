import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Code.sass'
import Editor from './components/Editor'
import Game from './components/Game'
import * as gameCanvas from './components/gameCanvas'
import Console from './components/Console'
import MainLayout from 'components/Layouts/Main'
import { CodeState, codeActions } from 'store/code'

type Props = StateProps & ActionProps

class Code extends Component<Props> {
  componentWillUnmount () {
    gameCanvas.stop()
  }

  render () {
    let { text, updateText, logs } = this.props

    return (
      <MainLayout
        header={
          <Link to='/'>Go to Draw</Link>
        }
        footer={
          <div>
            <button onClick={gameCanvas.stop}>Stop!</button>
            {'   '}
            <button onClick={gameCanvas.run}>Run!</button>
          </div>
        }
      >
        <div className={styles.Code}>
          <Editor
            onChange={updateText}
            value={text}
          />
          <span className={styles.rightPane}>
            <Game/>
            <Console messages={logs}/>
          </span>
        </div>
      </MainLayout>
    )
  }
}

type StateProps = CodeState
const mapStateToProps = (state: StoreState): StateProps => {
  return state.code
}

type ActionProps = typeof codeActions
const mapDispatchToProps = (dispatch: Dispatch): ActionProps => {
  return bindActionCreators(codeActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Code)
