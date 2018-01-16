import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Draw from 'views/Draw/Draw'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Draw}/>
      </Switch>
    </Router>
  )
}

export default Routes
