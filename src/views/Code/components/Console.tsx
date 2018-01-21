import React from 'react'
import styles from './Console.sass'

type Props = {
  messages?: string[]
}

const Console = (props: Props) => {
  let {messages = []} = props
  return (
    <div className={styles.Console}>
      {messages.map((text, i) => (
        <div key={i}>
          {text}
        </div>
      ))}
    </div>
  )
}

export default Console