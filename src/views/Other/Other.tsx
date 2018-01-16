import React from 'react'

import styles from './Other.sass'
import styleguide from 'styles/styleguide'

const Other = () => (
  <div className={styles.other}>
    <div className={styles.header}/>
    <div className={styles.content}>
      <div className={styles.canvas}/>
      <div className={styles.palette}>
        {styleguide.palette.map(hex => (
          <span
            className={styles.paletteElement}
            style={{background: hex}}
          />
        ))}
      </div>
    </div>
    <div className={styles.footer}/>
  </div>
)

export default Other
