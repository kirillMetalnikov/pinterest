import React, {Component} from 'react'
import {connect} from 'react-redux'

import CardList from './CardList'
import FormAdd from './FormAdd'

class MyCards extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var {cards, curentUser} = this.props

    cards = cards.filter( card => {
      return card.ownerID == (curentUser && curentUser._id)
    })

    return (
      <div>
        <h1>MyCards</h1>
        <FormAdd />
        <CardList
          cards = {cards}
        />
      </div>
    )
  }
}

const mapStateToProps= ({cards, curentUser}) => {
  return {cards, curentUser}
}

export default connect(mapStateToProps)(MyCards)
