import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom'
import {connect} from 'react-redux'

import CardList from './CardList'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CardList />
    )
  }
}

export default connect()(App)
