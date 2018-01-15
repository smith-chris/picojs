import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from 'store/store.prod'

let rootElement = document.getElementById('app')

ReactDOM.render(<App store={store}/>, rootElement)
