import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import store from 'store/store'

let rootElement = document.getElementById('app')
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App store={store}/>
    </AppContainer>,
    rootElement
  )
}

render()

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render()
  })
}
