import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getCards} from '../actions'

class AllCards extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getCards()
  }

  render() {
    return (
      <h1>AllCards</h1>
    )
  }
}

export default connect(null, {getCards})(AllCards)
