import React from 'react'
import styles from './Main.sass'

type Props = {
  className?: string,
  children: React.ReactNode
}

const Main = (props: Props) => {
  let {className, children} = props
  return (
    <div className={styles.Main}>
      <div className={styles.header}/>
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles.footer}/>
    </div>
  )
}

export default Main