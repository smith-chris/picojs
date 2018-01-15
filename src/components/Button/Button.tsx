import React from 'react'
import styles from './Button.sass'

type Props = {
  text?: String,
  onClick?: () => void
}

let Button = (props: Props) => {
  const {onClick, text} = props
  return (
    <button onClick={onClick} className={styles.button}>
      {text || 'Hello world!'}
    </button>
  )
}

export default Button
