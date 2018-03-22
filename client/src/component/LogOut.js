import React, {Component} from 'react'
import {connect} from 'react-redux'

import {logout} from '../actions'

class Logout extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.logout()
  }

  render() {
    return (
      <h1>Logout...</h1>
    )
  }
}

export default connect(null, {logout})(Logout)
