import React, {Component} from 'react'
import {connect} from 'react-redux'
import Masonry from 'masonry-layout'
import $ from 'jquery'

import Card from './Card'

class CardList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.grid = document.querySelector('.masonry-grid')
    this.msnry()
    this.errorImg()
  }

  componentDidUpdate() {
    this.msnry()
    this.errorImg()
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
    var {like, deleteCard} = this.props

    return (
      <div className = 'masonry-grid'>
          {cards.map( card => {
            return (
              <div  key = {card.id} className = 'grid-item'>
                <Card
                  {...card}
                  like = {like}
                  deleteCard ={deleteCard}
                />
              </div>
            )
          })}
        </div>
    )
  }
}

export default CardList
