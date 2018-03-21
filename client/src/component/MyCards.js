import React, {Component} from 'react'
import {connect} from 'react-redux'

import {addCard, deleteCard, like} from '../actions'
import CardList from './CardList'

class MyCards extends Component {
  constructor(props) {
    super(props)
    this.state = {imageLink: ''}
  }

  hundleAdd() {
    this.props.addCard(this.state.imageLink)
    this.setState({imageLink: ''})
  }

  hundleImageLinkInput(e) {
    this.setState({imageLink: e.target.value})
  }



  render() {
    var {cards} = this.props
    var {deleteCard, like} = this.props

    return (
      <div>
        <h1>MyCards</h1>
        <CardList
          cards = {cards}
          deleteCard = {deleteCard}
          like = {like}
        />
        <input type = 'text' onChange = {this.hundleImageLinkInput.bind(this)} value = {this.state.imageLink}/>
        <button onClick={this.hundleAdd.bind(this)}>Add</button>
      </div>
    )
  }
}

const mapStateToProps= ({cards}) => {
  return {cards}
}

export default connect(mapStateToProps, {addCard, deleteCard, like})(MyCards)
