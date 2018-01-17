import React from 'react'
import styles from './Draw.sass'
import Palette from './components/Palette'
import Slider from 'components/Slider/Slider'

const Draw = () => (
  <div className={styles.draw}>
    <div className={styles.header}/>
    <div className={styles.content}>
      <div className={styles.canvas}/>
      <div>
        <Palette/>
        <div>
          <Slider/>
        </div>
      </div>
    </div>
    <div className={styles.footer}/>
  </div>
)

export default Draw
