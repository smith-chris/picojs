import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Other.sass'

import Button from 'components/Button/Button'
import Header from 'components/Header/Header'

const Other = () => (
  <div className={styles.other}>
    <Header>Other view</Header>
    <Link to='/'>
      <Button/>
    </Link>
  </div>
)

export default Other
