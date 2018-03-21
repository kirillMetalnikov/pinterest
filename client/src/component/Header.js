import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavLogged from './NavLogged'
import NavUnlogged from './NavUnlogged'

class Header extends Component {
  render() {
    var {user} = this.props
    user = true

    return user ? <NavLogged /> : <NavUnlogged />
  }
}

function mapStateToProps({user}) {
  return {user}
}

export default connect(mapStateToProps)(Header)
