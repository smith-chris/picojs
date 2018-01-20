import React, { Component } from 'react'
import styles from './Canvas.sass'
import canvas from './drawCanvas'

canvas.classList.add(styles.canvasElement)

class Canvas extends Component {
  root: HTMLDivElement
  componentDidMount () {
    this.root.appendChild(canvas)
  }
  render () {
    return (
      <div 
        ref={ref => {this.root = ref}} 
        className={styles.Canvas}
      />
    )
  }
}

export default Canvas