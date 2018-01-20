import React, { Component } from 'react'
import styles from './Canvas.sass'
import createDrawingCanvas from './createDrawingCanvas'

let {app, img} = createDrawingCanvas()

app.view.classList.add(styles.canvasElement)

class Canvas extends Component {
  root: HTMLDivElement
  componentDidMount () {
    this.root.appendChild(app.view)
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

export const image = img

export default Canvas