import React from 'react'
import {
  HashRouter as Router,
  Switch
} from 'react-router-dom'

import Route from 'components/LayoutRoute/LayoutRoute'
import MainLayout from 'components/Layouts/Main'

import Draw from 'views/Draw/Draw'
import Code from 'views/Code/Code'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Draw}/>
        <Route exact path='/code' component={Code}/>
      </Switch>
    </Router>
  )
}

export default Routes
