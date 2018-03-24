import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Header} from 'semantic-ui-react'

import {like} from '../actions'
import CardList from './CardList'

class UserCards extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var {cards} = this.props

    cards = cards.filter( card => {
      return card.ownerID == this.props.match.params.id
    })

    return (
      cards.length
        ? <Container>
            <div className = 'header'>
              <h1><span>Cards of </span>{cards[0].ownerName}</h1>
            </div>
            <CardList
              cards = {cards}
            />
          </Container>
        : null
    )
  }
}

const mapStateToProps= ({cards}) => {
  return {cards}
}

export default connect(mapStateToProps)(UserCards)
