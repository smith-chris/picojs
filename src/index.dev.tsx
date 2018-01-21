import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

let rootElement = document.getElementById('app')
const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App/>
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
