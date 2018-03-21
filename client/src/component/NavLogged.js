import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from "react-router-dom"


class NavLogged extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='All cards'>All cards</Link>
        <Link to='My cards'>My cards</Link>
        <Link to='Logout'>Logout</Link>
      </div>
    )
  }
}

export default connect()(NavLogged)
