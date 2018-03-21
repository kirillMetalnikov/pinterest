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
    this.msnry()
    this.errorImg()
  }

  componentDidUpdate() {
    this.msnry()
    this.errorImg()
  }

  errorImg() {
    var componentThis = this
    $('img').on('error', function () { // () => {} is not right form escription, because 'this' not bind with 'img'
        $(this).attr('src', '/public/img/missing.png')
        componentThis.msnry.bind(componentThis)()
      })
  }

  msnry() {
    new Masonry(this.refs.msnryRef, {
      itemSelector: '.grid-item',
      columnWidth: 400
    })
  }

  render() {
    var {cards} = this.props
    var {like, deleteCard} = this.props
    return (
      <div className = 'masonry-grid' ref = 'msnryRef'>
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
