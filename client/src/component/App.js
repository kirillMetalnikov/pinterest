import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom'
import {connect} from 'react-redux'

class App extends Component {
  componentDidMount() {
    console.log(this.props.cards)
  }
  
  render() {
    return (
      <h1> App </h1>
    )
  }
}

const mapStateToProps= ({cards}) => {
  return {cards}
} 
export default connect(mapStateToProps)(App)
