import React, {Component} from 'react'
import {connect} from 'react-redux'

import {deleteCard, like} from '../actions'
import CardList from './CardList'
import FormAdd from './FormAdd'

class UserCards extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.match.params.id)
    return <h1>User cards</h1>
  }
}

const mapStateToProps= ({cards}) => {
  return {cards}
}

export default connect()(UserCards)
