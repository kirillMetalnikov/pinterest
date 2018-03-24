import React, {Component} from 'react'
import {connect} from 'react-redux'

import FullScreenImage from './FullScreenImage'
class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <FullScreenImage top = '20%' left = '30%'>
          <h1>It's my last project of <a style = {{backgroundColor: 'white'}} href = 'http://freecodecamp.org' target = 'blank'>FreeCodeCamp</a></h1>
        </FullScreenImage>
      </div>
    )
  }
}

export default connect()(Home)
