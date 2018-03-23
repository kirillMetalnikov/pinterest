import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavLogged from './NavLogged'
import NavUnlogged from './NavUnlogged'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {onScroll: 0}
  }
  
  componentDidMount() {
    window.onscroll = () => this.setState({onScroll: document.documentElement.scrollTop})
  }
  
  render() {
    var {curentUser} = this.props
    var opacity = this.state.onScroll < 150 ? 0 + this.state.onScroll / 150 : 1
    var height = this.state.onScroll < 150 ? 70 - 10 * this.state.onScroll / 150 : 60
    return (
      <div>
        <div style = {{
          position: 'fixed',
          top: 0,
          height,
          width: '100%',
          zIndex: 50,
          backgroundColor: `rgba(42, 27, 161, ${opacity})` ,
          boxShadow: '0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)'
          
        }}>
          {curentUser ? <NavLogged /> : <NavUnlogged />}
        </div>
        <div style = {{position: 'static', height}}></div>
      </div>
    )
  }
}

function mapStateToProps({curentUser}) {
  return {curentUser}
}

export default connect(mapStateToProps)(Header)
