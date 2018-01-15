import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Main from 'views/Main/Main'
import Other from 'views/Other/Other'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/other' component={Other}/>
      </Switch>
    </Router>
  )
}

export default Routes
