import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Code.sass'
import { updateTextAction } from 'store/code'
import Editor from './components/Editor'
import Game, { app } from './components/Game'
import Console from './components/Console'
import MainLayout from 'components/Layouts/Main'
import { Sprite, Application, Graphics, interaction, Rectangle } from 'pixi.js'
import { image } from 'views/Draw/components/Canvas'

type Props = StateProps & DispatchProps

type State = {
  messages: string[]
}

class Code extends Component<Props> {
  _update: () => void
  
  state: State = {
    messages: []
  }

  componentWillUnmount () {
    this.stopGame()
  }

  log = (value: string) => {
    let { messages } = this.state  
    this.setState({
      messages: [...messages, value.toString()]
    })
  }

  stopGame = () => {
    app.ticker.remove(this._update)    
  }

  reset = () => {
    let { stage } = app
    this.stopGame()
    while (stage.children[0]) { 
      stage.removeChild(stage.children[0])
    }
    this.setState({
      messages: []
    })
  }

  handleRun = () => {
    this.reset()
    setTimeout(() => {
      let { log } = this
      let { stage } = app
      let spr = () => {
        let texture = app.renderer.generateTexture(
          image, null, null,
          new Rectangle(0, 0, 16, 16)
        )
        let result = new Sprite(texture)
        result.anchor.set(0.5)
        return result
      }
      let evalText = `
      let update
      ${this.props.text}
      let __res = {update: update}
      __res
      `
      // tslint:disable-next-line
      this._update = eval(evalText).update
      if (this._update) {
        app.ticker.add(this._update)
      }
    })
  }

  render () {
    let { text, updateText } = this.props
    let { messages } = this.state

    return (
      <MainLayout
        header={
          <Link to='/'>Go to Draw</Link>
        }
        footer={
          <div>
            <button onClick={this.stopGame}>Stop!</button>
            {'   '}
            <button onClick={this.handleRun}>Run!</button>
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
