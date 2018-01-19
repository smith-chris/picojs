import React, { Component } from 'react'
import { Provider } from 'react-redux'

import 'styles/fix.css'
import 'styles/global.sass'
import Routes from 'routes/routes'

type Props = {
  // tslint:disable-next-line
  store: Redux.Store<any>
}

export default class App extends Component<Props> {
  render () {
    return (
      <Provider store={this.props.store}>
        <Routes/>
      </Provider>
    )
  }
}
