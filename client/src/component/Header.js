import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavLogged from './NavLogged'
import NavUnlogged from './NavUnlogged'

class Header extends Component {
  render() {
    var {curentUser} = this.props
    return curentUser ? <NavLogged /> : <NavUnlogged />
  }
}

function mapStateToProps({curentUser}) {
  return {curentUser}
}

export default connect(mapStateToProps)(Header)
