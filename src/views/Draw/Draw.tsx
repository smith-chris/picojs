import React from 'react'
import styles from './Draw.sass'
import Palette from './components/Palette'

const Draw = () => (
  <div className={styles.draw}>
    <div className={styles.header}/>
    <div className={styles.content}>
      <div className={styles.canvas}/>
      <Palette/>
    </div>
    <div className={styles.footer}/>
  </div>
)

export default Draw
