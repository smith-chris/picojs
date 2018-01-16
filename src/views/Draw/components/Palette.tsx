import React from 'react'
import styles from './Palette.sass'
import styleguide from 'styles/styleguide'

type Props = {
  className?: string
}

const Palette = (props: Props) => {
  let { className } = props
  return (
    <div className={[styles.Palette, className].join(' ')}>
      {styleguide.palette.map(hex => (
        <span
          key={hex}
          className={styles.PaletteElement}
          style={{ background: hex }}
        />
      ))}
    </div>
  )
}

export default Palette
