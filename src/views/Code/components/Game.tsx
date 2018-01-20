import React, { Component } from 'react'
import styles from './Game.sass'
import canvas from './gameCanvas'

canvas.classList.add(styles.canvasElement)

type Props = {
}

class Game extends Component<Props> {
  root: HTMLDivElement
  componentDidMount () {
    this.root.appendChild(canvas)
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