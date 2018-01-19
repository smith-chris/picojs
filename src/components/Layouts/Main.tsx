import React from 'react'
import styles from './Main.sass'

type Props = {
  className?: string,
  children: React.ReactNode
}

const Main = (props: Props) => {
  let {className, children} = props
  return (
    <div className={[styles.Main, className].join(' ')}>
      {children}
    </div>
  )
}

export default Main