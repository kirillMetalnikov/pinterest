import React, {Component} from 'react'
import {connect} from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1>Login</h1>
    )
  }
}

export default connect()(Login)
