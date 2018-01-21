import React, { Component } from 'react'
import { Provider } from 'react-redux'

import 'styles/fix.css'
import 'styles/global.sass'
import Routes from 'routes/routes'
import store from 'store/store'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    )
  }
}
