import React, { Component } from 'react'
import styles from './Game.sass'

type Props = {
}

class Game extends Component<Props> {
  render () {
    return (
      <div className={styles.Game}/>
    )
  }
}

export default Game