import React, {Component} from 'react'
import {connect} from 'react-redux'

class Page404 extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Error 404</h1>
        <h2>Page not found!</h2>
      </div>
    )
  }
}

export default connect()(Page404)
