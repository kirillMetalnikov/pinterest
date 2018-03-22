import React, {Component} from 'react'
import {connect} from 'react-redux'

import {authGoogle, authGithub} from '../actions'

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <a href = '/auth/google'>google</a>
        <br/>
        <a href = '/auth/github'>github</a>
      </div>
    )
  }
}

export default connect()(Login)
