import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Menu, Container} from 'semantic-ui-react'

import history from '../history'
import {logout} from '../actions'

class NavMenu extends Component {
  constructor(props) {
    super(props)
    var location = history.location.pathname
    this.state = { activeItem: location }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(e, { name }) {
    console.log(name)
    this.setState({ activeItem: name })
    history.push(name)
  }

  renderNav(menuItems) {
    var {activeItem} = this.state
    return menuItems.map( (item, index) => {
      return(
        <Menu.Item
          key = {index}
          name={item.to}
          active={activeItem == item.to}
          content={item.name}
          onClick={this.handleItemClick}
        />
      )
    })
  }

  render() {
    var { activeItem } = this.state
    var {curentUser} = this.props
    var menuItems = curentUser
      ? [
          {to: '/', name: 'Home'},
          {to: '/All cards', name: 'All cards'},
          {to: '/My cards', name: 'My cards'},
          {to: '/Logout', name: 'Logout'}
        ]
      : [
          {to: '/', name: 'Home'},
          {to: '/All cards', name: 'All cards'},
          {to: '/Login', name: 'Login'}
        ]

    return (
      <Container>
        <Menu size='large' pointing secondary color='transparent' inverted>
          {this.renderNav(menuItems)}
        </Menu>
      </Container>
    )
  }
}


function mapStateToProps({curentUser}) {
  return {curentUser}
}
// without {pure: false} an active link don't work (and need to Parent component!!!)
export default connect(mapStateToProps, {logout}, null, {pure: false})(NavMenu)
