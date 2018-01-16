import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import styles from './Main.sass'

import {
  incrementCounter,
  decrementCounter
} from 'store/counter'

import Button from 'components/Button/Button'
import Header from 'components/Header/Header'

type Props = {
  counter: number,
  increment: () => void,
  decrement: () => void
}

const Main = (props: Props) => {
  const {counter, increment, decrement} = props
  return (
    <div className={styles.main}>
      <Header>Main view</Header>
      <Link to='/draw'>
        <Button/>
      </Link>
      <p>{counter}</p>
      <div>
        <Button text='decrement!' onClick={decrement}/>
        <Button text='increment!' onClick={increment}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state: State) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
