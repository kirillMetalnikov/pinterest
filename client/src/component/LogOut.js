import React, {Component} from 'react'
import {connect} from 'react-redux'

class Logout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1>Logout</h1>
    )
  }
}

export default connect()(Logout)
