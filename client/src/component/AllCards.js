import React, {Component} from 'react'
import {connect} from 'react-redux'

class AllCards extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1>AllCards</h1>
    )
  }
}

export default connect()(AllCards)
