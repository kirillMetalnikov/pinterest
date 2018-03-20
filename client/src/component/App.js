import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom'
import {connect} from 'react-redux'
import Masonry from 'masonry-layout'
import $ from 'jquery'

import {addCard, deleteCard, like} from '../actions'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {imageLink: ''}
  }

  componentDidMount() {
    this.grid = document.querySelector('.masonry-grid')
    this.id = 6
    this.msnry()
    this.errorImg()
  }

  componentDidUpdate() {
    this.msnry()
    this.errorImg()
  }

  hundleAdd() {
    this.id++
    this.props.addCard(this.id, this.state.imageLink)
    this.setState({imageLink: ''})
  }

  hundleDelete(id) {
    return () => this.props.deleteCard(id)
  }

  hundleImageLinkInput(e) {
    this.setState({imageLink: e.target.value})
  }

  hundleLike(id) {
    return () => {
      this.props.like(id)
    }
  }

  errorImg() {
    $('img').on('error', function () { // () => {} is not right form escription, because 'this' not bind with 'img'
        $(this).attr('src', '/public/img/missing.png')
      })
  }

  msnry() {
    new Masonry(this.grid, {
      itemSelector: '.grid-item',
      columnWidth: 400
    })
  }

  render() {
    var {cards} = this.props

    return (
      <div>
        <div className = 'masonry-grid'>
          {cards.map( (card, index) => {
            var {image, description, user, likes, id} = card
            return (
              <div key = {index} className = 'grid-item'>
                <img src = {image} />
                <div>{description}</div>
                <div>{user}</div>
                <div
                  style ={{backgroundColor: 'yellow'}}
                  onClick = {this.hundleLike.bind(this)(id)}
                >
                  {likes}
                </div>
                <div>{id}</div>
                <button onClick={this.hundleDelete(id)}>Delete</button>
              </div>
            )
          })}
        </div>
        <input type = 'text' onChange = {this.hundleImageLinkInput.bind(this)} value = {this.state.imageLink}/>
        <button onClick={this.hundleAdd.bind(this)}>Add</button>
      </div>
    )
  }
}

const mapStateToProps= ({cards}) => {
  return {cards}
}
export default connect(mapStateToProps, {addCard, deleteCard, like})(App)
