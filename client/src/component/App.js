import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom'
import {connect} from 'react-redux'
import history from '../history'


import Header from './Header'
import Home from './Home'
import MyCards from './MyCards'
import AllCards from './AllCards'
import Login from './Login'
import Logout from './Logout'
import Page404 from './Page404'

import {getCurrentUser, getCards} from '../actions'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getCurrentUser()
    this.props.getCards()
  }

  render() {
    return (
      <Router history= {history}>
        <div>
          <Header />
          <Switch>
            <Route exact path ='/' component={Home} />
            <Route exact path ='/All cards' component={AllCards} />
            <Route exact path='/My cards' component={MyCards} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Logout' component={Logout} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect(null, {getCurrentUser, getCards})(App)
