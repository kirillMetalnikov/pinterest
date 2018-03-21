import React, {Component} from 'react'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  hundleDelete(id) {
    return () => this.props.deleteCard(id)
  }


  hundleLike(id) {
    return () =>   this.props.like(id)
  }

  render() {
    var {image, description, user, likes, id} = this.props
    return (
      <div>
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
        <button onClick={this.hundleDelete.bind(this)(id)}>Delete</button>
      </div>
    )
  }
}

export default Card
