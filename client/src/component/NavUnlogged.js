import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from "react-router-dom"


class NavUnLogged extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='All cards'>All cards</Link>
        <Link to='Login'>Login</Link>
      </div>
    )
  }
}

export default connect()(NavUnLogged)
