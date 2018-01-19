import React from 'react'
import styles from './Main.sass'

type Props = {
  className?: string,
  children: React.ReactNode,
  header?: React.ReactNode,
  footer?: React.ReactNode,
}

const Main = (props: Props) => {
  let {className, children, header, footer} = props
  return (
    <div className={styles.Main}>
      <div className={styles.header}>
        {header}
      </div>
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles.footer}>
        {footer}
      </div>
    </div>
  )
}

export default Main