import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Header} from 'semantic-ui-react'

import CardList from './CardList'

class AllCards extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var {cards} = this.props

    return (
      <Container>
        <div className = 'header'>
          <h1><span>All cards</span></h1>
        </div>
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
