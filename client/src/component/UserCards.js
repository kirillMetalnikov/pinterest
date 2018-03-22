import React, {Component} from 'react'
import {connect} from 'react-redux'

import {like} from '../actions'
import CardList from './CardList'

class UserCards extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.match.params.id)
    var {cards} = this.props

    cards = cards.filter( card => {
      return card.ownerID == this.props.match.params.id
    })

    return (
      <div>
        <h1>User cards</h1>
        <CardList
          cards = {cards}
        />
      </div>
    )
  }
}

const mapStateToProps= ({cards}) => {
  return {cards}
}

export default connect(mapStateToProps)(UserCards)
