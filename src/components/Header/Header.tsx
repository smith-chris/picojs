import React from 'react'
import styles from './Header.sass'

type Props = {
  children: React.ReactNode
}

let Header = (props: Props) => {
  const {children} = props
  return <h1 className={styles.header}>{children}</h1>
}

export default Header
