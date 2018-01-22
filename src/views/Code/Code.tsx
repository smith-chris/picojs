import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Code.sass'
import Editor from './components/Editor'
import Game from './components/Game'
import * as gameCanvas from './components/gameCanvas'
import Console from './components/Console'
import MainLayout from 'components/Layouts/Main'

type Props = StateProps & DispatchProps

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

type StateProps = {
  text: string,
  logs: string[]
}
const mapStateToProps = (state: StoreState): StateProps => {
  return {
    text: state.code.text,
    logs: state.code.logs
  }
}

type DispatchProps = {
  updateText: (value: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    updateText: (value: string) => dispatch({type: 'UpdateText', data: value})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Code)
