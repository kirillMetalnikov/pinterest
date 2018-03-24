import React, {Component} from 'react'
import {connect} from 'react-redux'

class FullScreenImage extends Component {
  constructor(props) {
    super(props)
    this.state = {clientHeight: 1}
  }

  resize() {
    this.setState({clientHeight: document.documentElement.clientHeight})
  }

  componentDidMount() {
    this.resize()
    window.addEventListener("resize", this.resize.bind(this))
  }

  render() {
    var {top, left} = this.props
    return (
      <div>
        <div
          style = {{
            position: 'absolute',
            top: 0,
            zIndex: -1,
            height: this.state.clientHeight,
            width: '100%',
            backgroundImage: 'url(http://img-b.photosight.ru/0ff/3641440_large.jpeg)',
            backgroundSize: 'cover'
        }}>
          <div
            style = {{
              background: 'linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%)',
              width: '100%',
              height: '100%',
              position: 'absolute',
              overflow: 'hidden'
            }}
          >
          </div>
        </div>
        <div style = {{
          paddingTop: top,
          paddingLeft: left,
          height: this.state.clientHeight - 70
        }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default FullScreenImage
