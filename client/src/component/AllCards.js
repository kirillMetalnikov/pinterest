import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container} from 'semantic-ui-react'

import CardList from './CardList'

class AllCards extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var {cards} = this.props

    return (
      <Container>
        <h1>All Cards</h1>
        <CardList
          cards = {cards}
        />
      </Container>
    )
  }
}

const mapStateToProps = (({cards}) => {
  return {cards}
})
export default connect(mapStateToProps)(AllCards)
