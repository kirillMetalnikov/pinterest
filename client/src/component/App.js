import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom'
import {connect} from 'react-redux'
import Masonry from 'masonry-layout'

import {addCard, deleteCard} from '../actions'
class App extends Component {

  componentDidMount() {
    this.grid = document.querySelector('.masonry-grid')
    this.id = 6
    this.msnry()
  }

  componentDidUpdate() {
    this.msnry()
  }

  hundleAdd() {
    this.id++
    this.props.addCard(this.id)
  }

  hundleDelete(id) {
    return () => this.props.deleteCard(id)
  }
  msnry() {
    new Masonry(this.grid, {
      itemSelector: '.grid-item',
      columnWidth: 300
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
                <div>{likes}</div>
                <div>{id}</div>
                <button onClick={this.hundleDelete(id)}>Delete</button>
              </div>
            )
          })}
        </div>
        <button onClick={this.hundleAdd.bind(this)}>Add</button>
      </div>
    )
  }
}

const mapStateToProps= ({cards}) => {
  return {cards}
}
export default connect(mapStateToProps, {addCard, deleteCard})(App)
