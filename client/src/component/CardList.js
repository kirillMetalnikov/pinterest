import React, {Component} from 'react'
import {connect} from 'react-redux'
import Masonry from 'masonry-layout'
import $ from 'jquery'

import CardItem from './CardItem'

class CardList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.loadImg.bind(this)()
//    this.msnry()
  }

  componentDidUpdate() {
    this.loadImg.bind(this)()
//    this.msnry()
  }

  loadImg() {
    var componentThis = this
    $('img, iframe')
      .on('error', function () { // () => {} is not right form escription, because 'this' not bind with 'img'
        $(this)
        .attr('src', '/public/img/missing.png')
//        .on('load', componentThis.msnry.bind(componentThis))
      })
      .on('load', componentThis.msnry.bind(componentThis))
  }

  msnry() {
    new Masonry(this.refs.msnryRef, {
      itemSelector: '.grid-item',
      gutter: 15,
      isFitWidth: true
    })
  }

  render() {
    var {cards} = this.props
    return (
      <div className = 'masonry-grid' ref = 'msnryRef'>
        {cards.map( card => {
          return (
            <div  key = {card.id} className = 'grid-item'>
              <CardItem
                {...card}
              />
            </div>
          )
        })}
        </div>
    )
  }
}

export default CardList
