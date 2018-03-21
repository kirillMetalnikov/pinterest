import React, {Component} from 'react'
import {connect} from 'react-redux'

class MyCards extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h1>MyCards</h1>
    )
  }
}

export default connect()(MyCards)
