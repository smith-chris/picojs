import React, { Component } from 'react'
import styles from './Game.sass'
import { Sprite, Application, Graphics, interaction } from 'pixi.js'

export const app = new Application({
  width: 128,
  height: 128
})

app.view.classList.add(styles.canvasElement)

type Props = {
}

class Game extends Component<Props> {
  root: HTMLDivElement
  componentDidMount () {
    this.root.appendChild(app.view)
  }
  render () {
    return (
      <div 
        ref={ref => {this.root = ref}}  
        className={styles.Game}
      />
    )
  }
}

export default Game