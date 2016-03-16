import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './modules/App'
import Home from './modules/Home'
import Instructions from './modules/Instructions'
import Batters from './modules/Batters'
import Game from './modules/Game'
import Results from './modules/Results'
import End from './modules/End'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {/* make them children of `App` */}
      <Route path="/home" component={Home}/>
      <Route path="/instructions" component={Instructions}/>
      <Route path="/batters" component={Batters}/>
      <Route path="/game" component={Game}/>
      <Route path="/results" component={Results}/>
      <Route path="/end" component={End}/>
    </Route>
  </Router>
), document.getElementById('app'))
