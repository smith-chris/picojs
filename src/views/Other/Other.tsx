import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Other.sass'
const Other = () => (
  <div className={styles.other}>
    <div className={styles.header}/>
    <div className={styles.content}>
      <div className={styles.canvas}/>
      <div className={styles.palette}/>
    </div>
    <div className={styles.footer}/>
  </div>
)

export default Other
