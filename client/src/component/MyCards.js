import React, {Component} from 'react'
import {connect} from 'react-redux'

import {deleteCard, like} from '../actions'
import CardList from './CardList'
import FormAdd from './FormAdd'

class MyCards extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var {cards} = this.props
    var {deleteCard, like} = this.props

    return (
      <div>
        <h1>MyCards</h1>
        <FormAdd />
        <CardList
          cards = {cards}
          deleteCard = {deleteCard}
          like = {like}
        />
      </div>
    )
  }
}

const mapStateToProps= ({cards}) => {
  return {cards}
}

export default connect(mapStateToProps, {deleteCard, like})(MyCards)
