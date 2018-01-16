import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Main from 'views/Main/Main'
import Draw from 'views/Draw/Draw'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/draw' component={Draw}/>
      </Switch>
    </Router>
  )
}

export default Routes
